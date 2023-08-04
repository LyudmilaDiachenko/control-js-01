// Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.


const findLongestWord = function(string){
  return string
    .split(' ')
    .sort((a,b) => a.length-b.length)
    .pop()
}

const findLongestWord2 = function(string){
  let array = string.split(' ')
  let longestWord = ''
  for (let word of array){
    if (word.length > longestWord.length){
      longestWord = word
    }
  }
  return longestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'