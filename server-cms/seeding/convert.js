"use strict";
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

if (fs.existsSync("seeding.json")) fs.unlinkSync("seeding.json");
let result = excelToJson({
  source: fs.readFileSync("Cata G Form combine till 1 september 2020.xlsx"),
  sheets: ["Compilation - Done"],
  columnToKey: {
    "*": "{{columnHeader}}",
  },
});

result = result["Compilation - Done"].filter((data) => {
  if (data["Nama Pensiunan"] && data["NIP/NPP/NIK"]) {
    return data;
  }
});
// result = result["Compilation - Done"];
result.shift();
result = JSON.stringify(result, null, 4);
fs.writeFileSync("seeding.json", result, "utf8");
