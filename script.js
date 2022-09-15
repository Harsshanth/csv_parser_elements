const data = require("./csvjson.json");
const fs = require("fs");
const events = {};
const jsonToCsv = (json) => {
  var fields = [
    "Email address",
    "Name (To be written in Certificate)",
    "Gender",
    "Name of the College/ University",
    "Name of the department",
    "Payment Proof(attach the screenshot )",
    "Payment UPI reference number/ Transaction Id :",
    "Phone Number",
    "Do you want accommodation?",
    "If you want accommodation kindly mention the date of accommodation.",
  ];
  var replacer = function (key, value) {
    return value === null ? "" : value;
  };
  var csv = json.map(function (row) {
    return fields
      .map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer);
      })
      .join(",");
  });
  csv.unshift(fields.join(",")); // add header column
  csv = csv.join("\r\n");
  return csv;
};

data.forEach((element) => {
  // console.log(element);
  let tech =
    element["Name of the Technical Event willing to participate"].split(",");
  let nonTech =
    element["Name of the Non-Technical Event willing to participate"].split(
      ","
    );
  nonTech.forEach((event) => {
    const a = [];
    a.push(element);
    if (events[event.trim()] != null) {
      // console.log("sfnisknfoisndfoinaidpna");
      // console.log(events[event.trim()]);
      a.push(...events[event.trim()]);
    }
    events[event.trim()] = a;
  });
  tech.forEach((event) => {
    const a = [];
    a.push(element);
    if (events[event.trim()] != null) {
      // console.log("sfnisknfoisndfoinaidpna");
      // console.log(events[event.trim()]);
      a.push(...events[event.trim()]);
    }
    events[event.trim()] = a;
  });
});

// console.log(events);
for (key in events) {
  console.log(key);
  var jsonData = jsonToCsv(events[key]);

  fs.writeFile("./output/" + key + ".csv", jsonData, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
}
