import { AppData } from '../types';

// Hybrid Cloud Sync Client
// 1. Chạy Local Java Spring Boot: Giao tiếp với http://localhost:8080/api/data
// 2. Chạy Local Node/Express proxy: Giao tiếp với /api/data
// 3. Chạy Vercel Serverless: Tự động Fallback sang Google Sheets API qua VITE_SHEET_API_URL

const JAVA_BACKEND_URL = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:8080/api/data';
const LOCAL_PROXY_URL = '/api/data';
const SHEET_API_URL = (import.meta as any).env?.VITE_SHEET_API_URL || '';

async function fetchFromUrl(url: string, timeoutMs = 1200): Promise<AppData | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.topics) && json.topics.length > 0) {
        return json as AppData;
      }
    }
  } catch (err) {
    // Backend offline hoặc không phản hồi
  }
  return null;
}

export async function fetchCloudData(): Promise<AppData | null> {
  // 1. Thử gọi Java Spring Boot Backend (Port 8080)
  const javaData = await fetchFromUrl(JAVA_BACKEND_URL);
  if (javaData) return javaData;

  // 2. Thử gọi Local Proxy (/api/data)
  const proxyData = await fetchFromUrl(LOCAL_PROXY_URL);
  if (proxyData) return proxyData;

  // 3. Fallback sang Google Sheets Web App nếu có cấu hình (Môi trường Vercel)
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

  // 1. Gửi đồng bộ tới Java Spring Boot Backend (Port 8080)
  try {
    const res = await fetch(JAVA_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) isSaved = true;
  } catch (err) {
    // Ignore khi Java backend chưa bật
  }

  // 2. Gửi đồng bộ tới Local Proxy nếu có
  try {
    const res = await fetch(LOCAL_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) isSaved = true;
  } catch (err) {
    // Ignore
  }

  // 3. Gửi đồng bộ lên Google Sheets Web App nếu có URL (Môi trường Vercel)
  if (SHEET_API_URL) {
    try {
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
