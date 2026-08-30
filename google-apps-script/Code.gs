/**
 * =========================================================================
 * THANGAMAGAL GOLD LOAN — Google Apps Script (Code.gs)
 * Web App Backend to capture Enquiry Form submissions into Google Sheets
 * =========================================================================
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new sheet (e.g. "Thangamagal Enquiries").
 * 2. In Google Sheets, click: Extensions > Apps Script.
 * 3. Delete any default code in Code.gs and paste this entire file.
 * 4. (Optional) Enter your email in ADMIN_EMAIL if you want instant email alerts.
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set configuration:
 *    - Description: Thangamagal Website Form Webhook
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (VERY IMPORTANT)
 * 8. Click "Deploy", authorize access, and copy the "Web app URL" (ends in /exec).
 * 9. Paste the Web App URL into your website's form submission handler.
 * =========================================================================
 */

// CONFIGURATION
const SHEET_NAME = 'Enquiries'; // Sheet tab name
const ADMIN_EMAIL = ''; // Optional: Enter your email (e.g. 'contact@greenvillassociates.com') for email alerts
const BRAND_NAME = 'Thangamagal Gold Loan';

/**
 * Handle HTTP POST requests from the website form
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 30 seconds for other processes to finish
  lock.tryLock(30000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);

    // If sheet tab doesn't exist, create it with styled headers
    if (!sheet) {
      sheet = doc.insertSheet(SHEET_NAME);
      setupHeaders(sheet);
    } else if (sheet.getLastRow() === 0) {
      setupHeaders(sheet);
    }

    // Parse incoming data (handles both FormData / x-www-form-urlencoded and JSON payloads)
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    const name = (data.name || '').trim();
    const phone = (data.phone || '').trim();
    const message = (data.message || '').trim();
    const source = (data.source || 'Website Contact Form').trim();

    // Basic validation
    if (!name && !phone) {
      return createJsonResponse({
        status: 'error',
        message: 'Name or Phone number is required'
      });
    }

    // Format IST Date & Time
    const now = new Date();
    const formattedTimestamp = Utilities.formatDate(now, 'Asia/Kolkata', 'dd/MM/yyyy HH:mm:ss');
    const formattedDate = Utilities.formatDate(now, 'Asia/Kolkata', 'dd/MM/yyyy');
    const status = 'New Enquiry';

    // Append row to sheet
    sheet.appendRow([
      formattedTimestamp,
      name,
      phone,
      message,
      source,
      status,
      formattedDate
    ]);

    // Optional Email Notification
    if (ADMIN_EMAIL && ADMIN_EMAIL.includes('@')) {
      sendEmailNotification(name, phone, message, formattedTimestamp);
    }

    return createJsonResponse({
      status: 'success',
      message: 'Enquiry received successfully! Our team will contact you soon.'
    });

  } catch (error) {
    return createJsonResponse({
      status: 'error',
      message: error.toString()
    });

  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle HTTP GET requests for quick health check
 */
function doGet(e) {
  return createJsonResponse({
    status: 'online',
    brand: BRAND_NAME,
    service: 'Google Sheets Form Endpoint',
    timestamp: new Date().toISOString()
  });
}

/**
 * Helper function to create styled headers in the sheet
 */
function setupHeaders(sheet) {
  const headers = [
    'Timestamp (IST)',
    'Customer Name',
    'Phone Number',
    'Message / Requirements',
    'Lead Source',
    'Status',
    'Date'
  ];

  sheet.appendRow(headers);

  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#700018'); // Thangamagal Maroon
  headerRange.setFontColor('#FFFFFF'); // White text
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  headerRange.setVerticalAlignment('middle');
  sheet.setRowHeight(1, 36);

  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.setColumnWidth(i, 160);
  }
  sheet.setColumnWidth(4, 280); // Message column wider

  // Freeze top row
  sheet.setFrozenRows(1);
}

/**
 * Helper to send email alert to admin
 */
function sendEmailNotification(name, phone, message, timestamp) {
  try {
    const subject = `🔔 New Gold Loan Enquiry: ${name} (${phone}) - ${BRAND_NAME}`;
    const body = `
New customer enquiry received from Thangamagal Gold Loan website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name: ${name}
• Phone: ${phone}
• Time: ${timestamp} (IST)
• Message: ${message || 'No additional message'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Branch: Chithra Complex, Chatram Bus Stand, Tiruchirappalli
Powered by Greenvill Associates
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    MailApp.sendEmail(ADMIN_EMAIL, subject, body);
  } catch (err) {
    Logger.log('Email notification failed: ' + err.toString());
  }
}

/**
 * Helper to return JSON Response with CORS support
 */
function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
