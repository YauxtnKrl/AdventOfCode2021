var fs = require("fs");
var textArray = (fs.readFileSync("../partOne/input.txt", "utf-8")).split("\n");
let horizontalLocation = 0;
let depth = 0;
let aim = 0;
let convertedArray = []

textArray.forEach(direction => {
  convertedArray.push(direction.split(" "))

  var first = direction.charAt(0)
  var last = Number(direction.charAt(direction.length - 1))

  if (first === "f") {
    horizontalLocation += last
    depth += aim * last
  } else if (first === "u") {
    aim -= last
  } else if (first === "d") {
    aim += last
  }
});

console.log("total=", depth * horizontalLocation)