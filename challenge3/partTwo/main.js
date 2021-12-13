let fileArray = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]


function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("../partOne/input.txt", "utf-8");

  fileArray = text.split("\n");
}
convertTextFile()

let filteredNums = fileArray


for (let i = 0; i < filteredNums[0].length; i++) {
  let colSum = 0

  filteredNums.forEach(Num => {

    colSum += Number(Num.charAt(i))
  });

  if (colSum >= filteredNums.length / 2) {
    mostCommon = 1
    console.log("1 is common")
  } else {
    mostCommon = 0
    console.log("0 is common")
  }

  if (i === fileArray[0].length) {
    console.log("FINAL VALUE!!!!", filteredNums)
  }
  filteredNums = filteredNums.filter(num => num.charAt(i) == mostCommon)

  console.log(filteredNums)

}