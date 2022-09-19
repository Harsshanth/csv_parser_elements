const data = require("./csvjson.json");
const fs = require("fs");

let accommodationList = [];
// console.log(data);
data.forEach((element) => {
  if (element["Do you want accommodation?"] == "Yes") {
    accommodationList.push(element);
  }
});
console.log(accommodationList);
fs.writeFile(
  "accommodationList.json",
  JSON.stringify(accommodationList),
  (err) => {
    if (err) console.log("Error: ", err);
    console.log("Saved json");
  }
);
// converter.json2csv(json, (err, csv) => {
//   if (err) console.log(err);
//   fs.writeFile("accommodationList.csv", csv, (err) => {
//     if (err) console.log(err);
//     console.log("Saved csv");
//   });
// });
