/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg"; // You can change this to test other files

// 1. If the filename starts with '#' => "Store"
// 2. Else if the file ends with '.pdf' or '.docx' => "Store"
// 3. Else => "Delete"

// Print the result using console.log()

if (
    fileName.startsWith('#')
) {
    console.log("Store");
} else if (
    fileName.endsWith('.pdf') ||
    fileName.endsWith('.docx')
) {
    console.log("Store");
} else {
    console.log("Delete");
}