let directionArray = []
let convertedArray = []
let horizontalLocation = 0
let depth = 0


function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./input.txt", "utf-8");

  fileArray = text.split("\n");
  directionArray = fileArray

}

convertTextFile();

directionArray.forEach(direction => {
  convertedArray.push(direction.split(" "))
});

convertedArray.forEach((direction, index) => {
  switch (direction[0]) {
    case "forward":
      horizontalLocation = horizontalLocation + Number(direction[1])
      break;
    case "up":
      depth = depth = depth - Number(direction[1])
      break;
    case "down":
      depth = depth + Number(direction[1])
      break;

    default:
      break;
  }
});

console.log("depth:", depth)
console.log("Horizontal Location:", horizontalLocation)
console.log("total=", depth * horizontalLocation)