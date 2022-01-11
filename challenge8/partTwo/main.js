let input = [
  ['be', 'cfbegad', 'cbdgef', 'fgaecd', 'cgeb', 'fdcge', 'agebfd', 'fecdb', 'fabcd', 'edb', ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe']],
  ['edbfga', 'begcd', 'cbg', 'gc', 'gcadebf', 'fbgde', 'acbgfd', 'abcde', 'gfcbed', 'gfec', ['fcgedb', 'cgb', 'dgebacf', 'gc']],
  ['fgaebd', 'cg', 'bdaec', 'gdafb', 'agbcfd', 'gdcbef', 'bgcad', 'gfac', 'gcb', 'cdgabef', ['cg', 'cg', 'fdcagb', 'cbg']],
  ['fbegcd', 'cbd', 'adcefb', 'dageb', 'afcb', 'bc', 'aefdc', 'ecdab', 'fgdeca', 'fcdbega', ['efabcd', 'cedba', 'gadfec', 'cb']],
  ['aecbfdg', 'fbg', 'gf', 'bafeg', 'dbefa', 'fcge', 'gcbea', 'fcaegb', 'dgceab', 'fcbdga', ['gecf', 'egdcabf', 'bgf', 'bfgea']],
  ['fgeab', 'ca', 'afcebg', 'bdacfeg', 'cfaedg', 'gcfdb', 'baec', 'bfadeg', 'bafgc', 'acf', ['gebdcfa', 'ecba', 'ca', 'fadegcb']],
  ['dbcfg', 'fgd', 'bdegcaf', 'fgec', 'aegbdf', 'ecdfab', 'fbedc', 'dacgb', 'gdcebf', 'gf', ['cefg', 'dcbef', 'fcge', 'gbcadfe']],
  ['bdfegc', 'cbegaf', 'gecbf', 'dfcage', 'bdacg', 'ed', 'bedf', 'ced', 'adcbefg', 'gebcd', ['ed', 'bcgafe', 'cdgba', 'cbgef']],
  ['egadfb', 'cdbfeg', 'cegd', 'fecab', 'cgb', 'gbdefca', 'cg', 'fgcdab', 'egfdb', 'bfceg', ['gbdfcae', 'bgc', 'cg', 'cgb']],
  ['gcafb', 'gcf', 'dcaebfg', 'ecagb', 'gf', 'abcdeg', 'gaef', 'cafbge', 'fdbac', 'fegbdc', ['fgae', 'cfgab', 'fg', 'bagce']]
]

let sum = 0
let list = []
let a, b, c, d, e, f, g
let result = ""

function convertTextFile() {
  var fs = require("fs");
  var text = fs.readFileSync("./../partOne/input.txt", "utf-8");

  input = text.split("\n");

  input.forEach(entry => {
    let splits = entry.split(" | ")

    list.push(splits[0].split(" "))
    list[list.length - 1].push(splits[1].split(" "))
    splits = []
  })
}
convertTextFile()

list.forEach(display => {

  display.sort((a, b) => {
    if (typeof (a) === 'string') {
      return a.length - b.length
    }
  })
  //compare 1 to 7 Determines A
  display[1].split('').forEach(segment => {
    if (!display[0].includes(segment)) {
      a = segment
    }
  })
  //identify 3
  let twoThreeFive = [display[3], display[4], display[5]]

  twoThreeFive.forEach(fiveSegment => {
    if (fiveSegment.includes(display[0][0]) && fiveSegment.includes(display[0][1])) {
      g = fiveSegment.split('').filter(segment => {
        if (!display[0].includes(segment) && !display[2].includes(segment) && !segment.includes(a)) {
          return true;
        }
      })[0]
    }
  })

  // compare 4 to 8 knowing A and G to get E
  e = display[9].split('').filter(segment => {
    if (!display[2].includes(segment) && !segment.includes(a) && !segment.includes(g)) {
      return true;
    }
  })[0]

  //compare 2 to A E G to get C and then F
  twoThreeFive.forEach(fiveSegment => {
    if (fiveSegment.includes(a) && fiveSegment.includes(e) && fiveSegment.includes(g)) {
      c = fiveSegment.split('').filter(segment => {
        if (segment != a && segment != e && segment != g && display[0].includes(segment)) {
          return true;
        }
      })[0]
    }
  })

  f = display[0].split('').filter(segment => segment != c)[0]

  //compare 8 to 0 gets D
  let zeroSixNine = [display[6], display[7], display[8]]

  zeroSixNine.forEach(zeroSegment => {
    if (zeroSegment.includes(e) && zeroSegment.includes(c)) {
      b = zeroSegment.split('').filter(segment => {
        if (!(a + c + e + f + g).includes(segment))
          return true;
      })[0]
    }
  })

  d = display[9].split('').filter(segment => {
    if (!(a + b + c + e + f + g).includes(segment))
      return true;
  })[0]

  result = ""
  display[10].forEach(digit => {

    switch (digit.length) {
      case 2:
        result = result + '1'
        break;
      case 3:
        result = result + '7'
        break;
      case 4:
        result = result + '4'
        break;
      case 7:
        result = result + '8'
        break;
      default:
        decoce7SegmentDisplay(digit)
        break;
    }
  })
  sum += Number(result)
});

function decoce7SegmentDisplay(number) {
  if (number.length === 5) {
    if (number.includes(e)) {
      result = result + '2'
    } else if (number.includes(b)) {
      result = result + '5'
    } else {
      result = result + '3'
    }

  } else if (number.length === 6) {
    if (!number.includes(e)) {
      result = result + '9'
    } else if (!number.includes(c)) {
      result = result + '6'
    } else {
      result = result + '0'
    }
  }
}

console.log(sum)