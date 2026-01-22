function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Appends a new row with timestamp, name, email, subject, and message
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run this function once to set up the headers
function setup() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
}
