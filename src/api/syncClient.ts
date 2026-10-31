import { AppData } from '../types';

// Hybrid Cloud Sync Client
// 1. Chạy Local: Giao tiếp với Express Backend (/api/data)
// 2. Chạy Vercel: Tự động Fallback sang Google Sheets API qua VITE_SHEET_API_URL
const LOCAL_BACKEND_URL = '/api/data';
const SHEET_API_URL = (import.meta as any).env?.VITE_SHEET_API_URL || '';

export async function fetchCloudData(): Promise<AppData | null> {
  // 1. Thử gọi Local Backend trước (timeout 1.5s)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const res = await fetch(LOCAL_BACKEND_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.topics) && json.topics.length > 0) {
        return json as AppData;
      }
    }
  } catch (err) {
    // Local Backend không có (môi trường Vercel hoặc backend tắt) -> Fallback sang Sheet
  }

  // 2. Fallback sang Google Sheets Web App nếu có cấu hình
  if (SHEET_API_URL) {
    try {
      const res = await fetch(SHEET_API_URL, { method: 'GET' });
      if (res.ok) {
        const result = await res.json();
        if (result && result.success && result.data && Array.isArray(result.data.topics) && result.data.topics.length > 0) {
          return result.data as AppData;
        }
      }
    } catch (err) {
      console.warn('[SyncClient] Google Sheets API fetch failed:', err);
    }
  }

  return null;
}

export async function saveCloudData(data: AppData): Promise<boolean> {
  let isSaved = false;

  // 1. Đồng bộ lên Local Backend nếu đang chạy
  try {
    const res = await fetch(LOCAL_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) isSaved = true;
  } catch (err) {
    // Ignore khi chạy trên Vercel không có local backend
  }

  // 2. Đồng bộ lên Google Sheets Web App nếu có URL
  if (SHEET_API_URL) {
    try {
      // Dùng text/plain để tránh CORS Preflight OPTIONS của Google Apps Script
      const res = await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ data })
      });
      if (res.ok) isSaved = true;
    } catch (err) {
      console.warn('[SyncClient] Google Sheets sync failed:', err);
    }
  }

  return isSaved;
}
