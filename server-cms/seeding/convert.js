"use strict";
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

if (fs.existsSync("seeding.json")) fs.unlinkSync("seeding.json");
let result = excelToJson({
  source: fs.readFileSync("Cata G Form combine till 1 september 2020.xlsx"),
  sheets: ["Compilation - Process & Formula"],
  columnToKey: {
    "*": "{{columnHeader}}",
  },
});

result = result["Compilation - Process & Formula"].filter((data) => {
  if (data["Alamat E-Mail"]) {
    if (data["Alamat E-Mail"].indexOf('.') !== -1) {
      return data;
    }
  }
});
// result = result["Compilation - Process & Formula"];
// result.shift();
result = JSON.stringify(result, null, 4);
fs.writeFileSync("seeding.json", result, "utf8");
