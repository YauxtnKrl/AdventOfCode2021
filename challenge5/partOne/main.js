let lines = [
  [0, 9, 5, 9],
  [8, 0, 0, 8],
  [9, 4, 3, 4],
  [2, 2, 2, 1],
  [7, 0, 7, 4],
  [6, 4, 2, 0],
  [0, 9, 2, 9],
  [3, 4, 1, 4],
  [0, 0, 8, 8],
  [5, 5, 8, 2]
]

function convertTextFile(location) {
  var fs = require("fs");
  var text = fs.readFileSync(location, "utf-8");
  lines = []
  fileArray = text.split("\n");

  fileArray.forEach(line => {
    var noArrow = line.split("->")
    array1 = noArrow[0].split(",").map(Number)
    array2 = noArrow[1].split(",").map(Number)

    lines.push(array1.concat(array2))
  })
}
convertTextFile("./input.txt")

let points = []

let overlaps = []

lines.forEach(line => {
  if (line[0] === line[2]) {
    //console.log("Vertical")
    PlotPoints(line[1], line[3], line[0], true)
  } else if (line[1] === line[3]) {
    //console.log("horizontal")
    PlotPoints(line[0], line[2], line[1], false)
  } else {
    //console.log("diag")
    plotDiag([line[0], line[2]], [line[1], line[3]])
  }
})

function PlotPoints(start, end, line, vertical) {
  let diff
  let increase = true

  if (start > end) {
    diff = start - end
    increase = false
  } else if (end > start) {
    diff = end - start
  }
  // console.log(line, start, end)
  // console.log(diff)
  for (let i = 0; i <= diff; i++) {
    let point

    if (increase) {
      // console.log(start + i)
      point = start + i
    } else {
      // console.log(start - i)
      point = start - i
    }

    if (vertical) {
      // console.log(`x=${line} y=${point}`)
      IntersectCheck(`${line},${point}`)
    } else {
      // console.log(`x=${point} y=${line}`)
      IntersectCheck(`${point},${line}`)
    }
  }
}

function plotDiag(x, y) {
  let diff
  let direction

  if (x[0] > x[1] && y[0] > y[1]) {
    //down left x-1 y-1
    diff = (x[0] - x[1])
    direction = "dl"
  }
  else if (x[0] > x[1] && y[0] < y[1]) {
    //up left x-1 y+1
    diff = (x[0] - x[1])
    direction = "ul"
  }
  else if (x[0] < x[1] && y[0] > y[1]) {
    //down right x+1 y-1
    diff = (x[1] - x[0])
    direction = "dr"
  }
  else if (x[0] < x[1] && y[0] < y[1]) {
    //up right x+1 y+1
console.log(x[0],y[0])
    diff = (x[1] - x[0])
    direction = "ur"
  }

  for (let i = 0; i <= diff; i++) {
    switch (direction) {
      case "dl":
        IntersectCheck(`${x[0]-i},${y[0]-i}`)
        //console.log(`${x[0]-i},${y[0]-i}`)
        break;
      case "ul":
        IntersectCheck(`${x[0]-i},${y[0]+i}`)
        //console.log(`${x[0]-i},${y[0]+i}`)
        break;
      case "dr":
        IntersectCheck(`${x[0]+i},${y[0]-i}`)
        //console.log(`${x[0]+i},${y[0]-i}`)
        break;
      case "ur":
        IntersectCheck(`${x[0]+i},${y[0]+i}`)
        console.log(`${x[0]+i},${y[0]+i}`)
        break;
    }

  }
}

function IntersectCheck(newPoint) {
  var match = points.includes(newPoint)

  if (match != []) {
    //console.log(match)
    if (!overlaps.includes(newPoint)) {
      overlaps.push(newPoint)
    }
  } else {
    points.push(newPoint)
  }
}

console.log(overlaps.length)
// console.log(points)