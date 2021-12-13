let draw = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

let cards = [
  {

    card: [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0]
  },

  {
    card: [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0]
  },

  {
    card: [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
    rows: [0, 0, 0, 0, 0],
    columns: [0, 0, 0, 0, 0]
  }
]

// let fileArray
// //consume file of starting array and unknown blocks of bingo cards
// function convertTextFile(location) {
//   var fs = require("fs");
//   var text = fs.readFileSync(location, "utf-8");

//   fileArray = text.split("\n");
//   //grab first list of nums as draw
//   draw = fileArray[0].split(",").map(Number)
//   for (let i = 2; i < fileArray.length; i++) {
//     if (fileArray[i] != "") {
//       cards.push({
//         card: [
//           fileArray[i].split(/\s{1,}/).map(Number),
//           fileArray[i + 1].split(/\s{1,}/).map(Number),
//           fileArray[i + 2].split(/\s{1,}/).map(Number),
//           fileArray[i + 3].split(/\s{1,}/).map(Number),
//           fileArray[i + 4].split(/\s{1,}/).map(Number),
//         ],
//         rows: [0, 0, 0, 0, 0],
//         columns: [0, 0, 0, 0, 0]
//       })

//       i += 5
//     }
// convertTextFile("../partOne/input.txt")





let lastWinningCard

function NumOnCard(drawnNumber, card, cardIndex) {

  card.card.forEach((row, j) => {
    for (k = row.length - 1; k >= 0; k--) {
      item = row[k]
      if (item === drawnNumber) {
        card.rows[j] += 1
        card.columns[k] += 1
        row.splice(k, 1)
        //console.log(row)
      };
    }
  });
  //console.log(card.card)
  return BingoCheck(card, cardIndex);
}

function BingoCheck(card, cardIndex) {
  let bingo
  const isFive = score => score === 5;

  if (card.rows.findIndex(isFive) != -1) {
    bingo = `${card.card} Row ${card.rows.findIndex(isFive)+1}`
  } else if (card.columns.findIndex(isFive) != -1) {
    bingo = `${card.card} column ${card.columns.findIndex(isFive)+1}`
  }

  if (bingo) {
    if (cards.length != 2) {
      console.log("cols",card.columns)
      console.log("rows",card.rows)
      cards.splice(cardIndex, 1)
      console.log(card)
      return false

    } else {
      console.log("BIG LOOOOSER!", bingo, )
      lastWinningCard = card

      return true
    }
  }
}

function CalculateScore(draw) {
  let sum = 0
  console.log(lastWinningCard.card)
  lastWinningCard.card.forEach(row => {
    row.forEach((item) => {
      sum += item
    });
  });

  console.log("final score:", draw * sum)
}

for (let i = 0; i < draw.length; i++) {
  if (lastWinningCard) {
    break;
  }

  for (j = 0; j < cards.length; j++) {

    if (NumOnCard(draw[i], cards[j], j)) {
      CalculateScore(draw[i])
      break;
    }
  }
  if (lastWinningCard) {
    break;
  }
}