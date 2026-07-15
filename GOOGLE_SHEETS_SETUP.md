# Google Sheets Booking Form — Setup Guide

Booking form submissions from the website are saved to a Google Sheet via a
Google Apps Script web app. No extra npm packages are needed.

---

## Step 1 — Create the Google Sheet

1. Go to **sheets.google.com** and create a new spreadsheet.
2. Name the first sheet tab: **`Enquiries`**
3. Add these headers in row 1 (in order):

   | A | B | C | D | E | F | G | H |
   |---|---|---|---|---|---|---|---|
   | Submitted At | Parent Name | Email | Phone | Child Age | Subject | Country | Message |

---

## Step 2 — Create the Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**.
2. Delete any existing code in `Code.gs`.
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Enquiries");
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.parentName  || "",
      data.email       || "",
      data.phone       || "",
      data.childAge    || "",
      data.subject     || "",
      data.country    || "",
      data.message     || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (Ctrl+S).

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Set:
   - **Description**: Schoolhelphub booking form
   - **Execute as**: Me (your Google account)
   - **Who has access**: **Anyone, even anonymous** ← ⚠️ CRITICAL — must be this, NOT just "Anyone"
     (If set to just "Anyone", Google redirects unauthenticated requests to a login page
     and nothing gets saved — this is the most common reason submissions don't appear.)
4. Click **Deploy**.
5. **Copy the deployment URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Step 4 — Add URL to .env

Open `.env` and paste the URL:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Restart your Next.js dev server (`npm run dev`) to pick up the change.

---

## Testing

Submit the booking form on the website. A new row should appear in your Google
Sheet within seconds. If it doesn't:

1. Check the browser network tab — the `/api/book-trial` POST should return `{ "success": true }`.
2. Check server logs (`npm run dev` console) for `[book-trial]` messages.
3. Re-deploy the Apps Script if you edited it (previous deployment URLs become stale).

---

## Optional: Email notification on new submission

Add this to your Apps Script to receive an email alert when someone books:

```javascript
function doPost(e) {
  // ... existing code ...

  // Add after sheet.appendRow(...)
  MailApp.sendEmail({
    to: "your@email.com",
    subject: "New Schoolhelphub Booking: " + data.parentName,
    body: [
      "New booking received:",
      "Name: " + data.parentName,
      "Email: " + data.email,
      "Phone: " + data.phone,
      "Child age: " + data.childAge,
      "Subject: " + data.subject,
      "Country: " + data.country,
      "Message: " + data.message,
    ].join("\n")
  });

  // ...
}
```
