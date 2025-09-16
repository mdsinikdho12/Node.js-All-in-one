const path = require("path");
const fs = require("fs");

fs.readFile(
  path.join(__dirname, "abc.txt"),
  { encoding: "utf-8" },
  (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  }
);

fs.writeFile(path.join(__dirname, "abc.txt"), "Update Text ......", (err) => {
  if (err) console.log(err);
  else console.log("Data Save");
});
