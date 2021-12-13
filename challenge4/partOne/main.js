let draw = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1]

let cards = [{
    name: "card1",
    card: [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0],
    bingo: false
  },


  {
    name: "card2",
    card: [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0],
    bingo: false
  },

  {
    name: "card3",
    card: [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0],
    bingo: false
  }
]

let fileArray
//consume file of starting array and unknown blocks of bingo cards
function convertTextFile(location) {
  var fs = require("fs");
  var text = fs.readFileSync(location, "utf-8");

  fileArray = text.split("\n");
  //grab first list of nums as draw
  draw = fileArray[0].split(",").map(Number)
  for (let i = 2; i < fileArray.length; i++) {
    if (fileArray[i] != "") {
      cards.push({
        card: [
          fileArray[i].split(/\s{1,}/).map(Number),
          fileArray[i + 1].split(/\s{1,}/).map(Number),
          fileArray[i + 2].split(/\s{1,}/).map(Number),
          fileArray[i + 3].split(/\s{1,}/).map(Number),
          fileArray[i + 4].split(/\s{1,}/).map(Number),
        ],
        rows: [0, 0, 0, 0, 0],
        columns: [0, 0, 0, 0, 0]
      })

      i += 5
    }
  }
}
convertTextFile("./input.txt")

let winningCard

function NumOnCard(drawnNumber, card) {
  console.log(drawnNumber)

  let targetMatch = []
  card.card.forEach((row, j) => {

    row.forEach((num, k) => {
      if (num === drawnNumber) {
        console.log("Match", drawnNumber)
        card.rows[j]++
        card.columns[k]++

        targetMatch.push(j)
        targetMatch.push(k)
      }
    });


    //remove the matchen number
    if (targetMatch[0] != undefined || targetMatch[1] != undefined) {
      card.card[targetMatch[0]][targetMatch[1]] = "x"
    }
    targetMatch = []

  });

  return BingoCheck(card, drawnNumber);
}

function BingoCheck(card, draw) {

  let bingo
  const isFive = score => score === 5;


  if (card.rows.findIndex(isFive) != -1) {
    bingo = `${card} Row ${card.rows.findIndex(isFive)+1}`
    card.bingo = true
    console.log("!!", bingo)
  } else if (card.columns.findIndex(isFive) != -1) {
    bingo = `${card} column ${card.columns.findIndex(isFive)+1}`
    card.bingo = true
    console.log("!!", bingo)
  }



  if (bingo) {
    winningCard = card
    let sum = 0
    winningCard.card.forEach(row => {
      row.forEach((item) => {
        if(item != "x"){
        sum += item
        }
      });
    });

    console.log("WINNER!", draw * sum, winningCard.name)
    console.log(`${card.card[0]}`)
    console.log(`${card.card[1]}`)
    console.log(`${card.card[2]}`)
    console.log(`${card.card[3]}`)
    console.log(`${card.card[4]}`)
    return true
  } else {
    return false
  }
}

function bingo() {

  for (let index = 0; index < draw.length; index++) {

    for (j = 0; j < cards.length; j++) {

      if (cards[j].bingo != true) {

        NumOnCard(draw[index], cards[j], j)

      } else {

        continue;

      }
    }
  }
}
bingo()