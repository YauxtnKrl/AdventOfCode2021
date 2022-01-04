let crabSubs = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
let sum = 0
let average


function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./../partOne/input.txt", "utf-8");

  crabSubs = text.split(",");
}
convertTextFile()

crabSubs.forEach(sub => {
  sum += Number(sub)
})

average = Math.round(Number(sum) / crabSubs.length)


function IsAverageEfficient(list) {
  var mostEfficient
  var fuelTotal = 0
  efficientMove = average - 1

  for (let index = 3; index > 0; index--) {
    list.forEach(sub => {
      diff = efficientMove - Number(sub)
      diff = Math.abs(diff)

      sum = (diff / 2) + 0.5
      fuelTotal += sum * diff
    })

    if (index === 3) {
      mostEfficient = fuelTotal
    }

    if (fuelTotal < mostEfficient) {
      mostEfficient = fuelTotal
    }

    fuelTotal = 0
    efficientMove++
  }

  console.log(mostEfficient)
}
IsAverageEfficient(crabSubs)