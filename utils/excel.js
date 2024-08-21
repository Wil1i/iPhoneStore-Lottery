const FileSaver = require("file-saver")
const XLSX = require("xlsx")

const fileType =
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
// Desired file extesion
const fileExtension = ".xlsx";

const exportToSpreadsheet = (data, fileName) => {
//Create a new Work Sheet using the data stored in an Array of Arrays.
const workSheet = XLSX.utils.aoa_to_sheet(data);
// Generate a Work Book containing the above sheet.
const workBook = {
  Sheets: { data: workSheet, cols: [] },
  SheetNames: ["data"],
};
// Exporting the file with the desired name and extension.
const excelBuffer = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
const fileData = new Blob([excelBuffer], { type: fileType });
FileSaver.saveAs(fileData, fileName + fileExtension);
console.log(1)
};

module.exports = exportToSpreadsheet