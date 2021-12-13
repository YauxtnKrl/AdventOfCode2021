let depthArray = []
let previousDepth = (depthArray[0] + depthArray[1] + depthArray[2])
let total = 0

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./../partOne/input.txt", "utf-8");

  fileArray = Number(text).split("\n");
  console.log(depthArray)
  depthArray = fileArray

}

convertTextFile();

depthArray.forEach((depth, depthIndex) => {
  if (depthIndex + 2 > depthArray.length) {
   return;
  }
  var depthWindow = Number(depth) + Number(depthArray[depthIndex + 1]) + Number(depthArray[depthIndex + 2])

  if (previousDepth < depthWindow) {
    total++
    console.log(depthWindow)
  }
  previousDepth = depthWindow
});

console.log("total depth increase:", total)