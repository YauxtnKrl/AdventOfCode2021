let fileArray = []

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./input.txt", "utf-8");

  fileArray = text.split("\n");
}
convertTextFile()

let sumOfColumn = []
let gamma = ""
let epsilon = ""

for (let index = 0; index < fileArray[0].length; index++) {

  fileArray.forEach(byte => {
    console.log(sumOfColumn)
    sumOfColumn += Number(byte[index])
  });

  if (sumOfColumn > fileArray.length / 2) {
    gamma += 1
    epsilon += 0
  } else if (sumOfColumn < fileArray.length / 2) {
    gamma += 0
    epsilon += 1
  }
sumOfColumn = 0
}

console.log("Power:", parseInt(gamma, 2) * parseInt(epsilon, 2))