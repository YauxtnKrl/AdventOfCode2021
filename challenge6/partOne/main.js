let fishAge = {
  days: 256,
  age: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

let fileArray = []

function ConsumeData(location) {
  var fs = require("fs");
  var text = fs.readFileSync(location, "utf-8");
  lines = []
  fileArray = text.split(",");

  fileArray.forEach(fish => {
    fishAge.age[fish]++
  })
}
ConsumeData("./input.txt")

for (let i = 0; i < fishAge.days; i++) {
  FishAger()
}

function FishAger() {
  if (fishAge.age[0] > 0) {

    babies = fishAge.age.shift()

    fishAge.age.push(babies)
    fishAge.age[6] = fishAge.age[6] + babies

  } else {
    fishAge.age.shift()
    fishAge.age.push(0)
  }

}

let sum = 0
fishAge.age.forEach(age => {
  sum += age
})
//sum of every fish
console.log(sum)