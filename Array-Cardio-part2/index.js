const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

//   Some and Every Examples
// Array.prototype.some()
// Write a program to check weather the people age at least above 19

// const isNinteen = people.some(person => {
//     let currentDate = (new Date()).getFullYear()
//     if(currentDate - person.year >= 19){
//         return true
//     }
// })

// Short syntax 
const isNinteen = people.some(person => (new Date()).getFullYear() - person.year >= 19)
console.table(isNinteen)

// const isEveryNinteen = people.every(person => {
//   let currentDate = (new Date()).getFullYear()
//   if(currentDate - person.year >= 19){
//       return true
//   }
// })

const isEveryNinteen = people.every(person => (new Date()).getFullYear() - person.year >= 19)
console.table(isEveryNinteen)


// Array.prototype.find()
// Find is like filter but returns only one that is specified
const findId = comments.find(comment => comment.id === 523423)
console.log(findId)

// FindIndex Example
const index = comments.findIndex(comment => comment.id === 523423)
console.log(index)

// comments.splice(index, 1)
const newComment = [
  ...comments.splice(0 , index),
  ...comments.splice(index+1)
]
console.log(newComment)
