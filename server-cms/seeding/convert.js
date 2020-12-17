"use strict";
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

if (fs.existsSync("seeding.json")) fs.unlinkSync("seeding.json");
let result = excelToJson({
  source: fs.readFileSync("Cata G Form combine till 1 september 2020.xlsx"),
  sheets: ["Sheet1"],
  columnToKey: {
    "*": "{{columnHeader}}",
  },
});

result = result["Sheet1"].filter((data) => {
  if (data["Nama Pensiunan"] && data["NIP/NPP/NIK"]) {
    return data;
  }
});
// result = result["Sheet1"];
result.shift();

const seen = new Set();
result = result.filter(el => {
  const duplicate = seen.has(el["Nama Pensiunan"]);
  seen.add(el["Nama Pensiunan"]);
  return !duplicate;
});


result = JSON.stringify(result, null, 4);
fs.writeFileSync("seeding.json", result, "utf8");
