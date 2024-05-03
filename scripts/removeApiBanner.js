const fs = require("fs");
const path = require("path");

const componentName = "ApiBanner";
const importPath = "@site/src/components/ApiBanner/ApiBanner.tsx";

function removeComponent(rootDirectory) {
  fs.readdirSync(rootDirectory).forEach((item) => {
    const filePath = path.join(rootDirectory, item);

    if (fs.lstatSync(filePath).isDirectory()) {
      removeComponent(filePath);
    } else if (filePath.endsWith(".md") || filePath.endsWith(".mdx")) {
      let fileContent = fs.readFileSync(filePath, "utf-8");

      fileContent = fileContent.replace(
        `import ${componentName} from '${importPath}';\n`,
        ""
      );

      fileContent = fileContent.replace(
        new RegExp(`<${componentName}(\\s.*?)?/>`, "g"),
        ""
      );

      fs.writeFileSync(filePath, fileContent, "utf-8");
    }
  });
}

removeComponent("./docs");
