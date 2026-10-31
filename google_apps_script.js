/**
 * GOOGLE APPS SCRIPT CHO YOURPLAN
 * 
 * Hướng dẫn thiết lập (Chỉ mất 1 phút):
 * 1. Mở trang Google Sheet mới: https://sheets.new
 * 2. Đổi tên Sheet thành: YourPlan Database
 * 3. Bấm menu: Tiện ích mở rộng (Extensions) -> Apps Script
 * 4. Xóa hết code cũ, dán toàn bộ đoạn mã này vào.
 * 5. Bấm "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment)
 * 6. Chọn loại: "Ứng dụng web" (Web app)
 * 7. Thiết lập quan trọng:
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone)
 * 8. Bấm "Triển khai" -> Cấp quyền truy cập Google Account.
 * 9. Sao chép "URL ứng dụng web" (dạng https://script.google.com/macros/s/.../exec)
 *    và gán vào biến môi trường Vercel: VITE_SHEET_API_URL=<URL_CỦA_BẠN>
 */

function doGet(e) {
  try {
    const sheet = getOrCreateDataSheet();
    const cellValue = sheet.getRange(1, 1).getValue();
    
    let data = { topics: [], notes: [], mindmapNodes: [] };
    if (cellValue) {
      data = JSON.parse(cellValue);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: data
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    let payload = null;
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    }

    if (!payload) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Empty payload"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = getOrCreateDataSheet();
    
    // Nếu gửi data đầy đủ hoặc data lồng bên trong
    const dataToSave = payload.data || payload;
    sheet.getRange(1, 1).setValue(JSON.stringify(dataToSave));
    sheet.getRange(1, 2).setValue(new Date().toISOString());

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Data saved successfully to Google Sheets"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateDataSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("YourPlan_Data");
  if (!sheet) {
    sheet = ss.insertSheet("YourPlan_Data");
    sheet.getRange(1, 1).setValue(""); // Column A: JSON String Data
    sheet.getRange(1, 2).setValue("Initial Setup"); // Column B: Last Updated
  }
  return sheet;
}

