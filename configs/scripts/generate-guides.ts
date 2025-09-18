const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const directoryPath = path.join(__dirname, "../../04-guides");

fs.readdir(directoryPath, function (err, files) {
  const guidesList = [];

  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  for (const file of files) {
    if (file === "overview.mdx") continue;

    const str = fs.readFileSync(`./docs/04-guides/${file}`, "utf8");

    guidesList.push(matter(str));
  }

  const jsonData = JSON.stringify(guidesList, null, 2);

  fs.writeFileSync("./configs/guides/guides.json", jsonData);
});
