let crabSubs = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
let sum = 0
let median

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./input.txt", "utf-8");

  crabSubs = text.split(",");
}
// convertTextFile()



crabSubs.forEach(sub => {
sum += sub+sum
})

console.log(sum/2)