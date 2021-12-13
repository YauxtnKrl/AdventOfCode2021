let depthArray = []
let previousDepth = 0
let total = 0

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./input.txt", "utf-8");

  fileArray = text.split("\n");
  depthArray = fileArray

}

convertTextFile();

depthArray.forEach(depth => {
  if (previousDepth < depth) {
    total++
  }
  previousDepth = depth
});

console.log("total depth increase:", total)