let crabSubs = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
let sum = 0
let median

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./input.txt", "utf-8");

  crabSubs = text.split(",");
}
convertTextFile()

function MedianSort(list) {
  //sort numerically
  list.sort((a, b) => {
    return a - b
  })

  // find middle of array
  if (list.length % 2) {
    median = Number(list[Math.floor(list.length / 2)])
  } else {
    average = (Number(crabSubs[Math.floor(list.length / 2)]) + Number(crabSubs[Math.floor(list.length / 2) - 1])) / 2
    median = average
  }
}

MedianSort(crabSubs)
crabSubs.forEach(sub => {
  if (sub < median) {
    sum += (median - sub)
  } else {
    sum += (sub - median)
  }
})

console.log(sum)