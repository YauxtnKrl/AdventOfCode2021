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

let count = 0
let list = []

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
  display.forEach(digit => {
    if (typeof (digit) != 'string') {
      digit.forEach(output => {
        switch (output.length) {
          case 2:
            count++
            console.log(output, count)
            break;
          case 4:
            count++
            console.log(output, count)
            break;
          case 3:
            count++
            console.log(output, count)
            break;
          case 7:
            count++
            console.log(output, count)
            break;
        }
      });
    }
  })
});

console.log(count)