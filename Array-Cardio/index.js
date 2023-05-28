// Array of names
const names = [
    "Alice", "Bob", "Charlie", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter",
    "Quinn", "Rose", "Sam", "Tara", "Uma", "Victor", "Wendy", "Xavier", "Yara", "Zoe"];

const people = [
    { firstName: "Alice", lastName: "Smith", yearBorn: 1985, yearDeath: 2020 },
    { firstName: "Bob", lastName: "Johnson", yearBorn: 1990, yearDeath: 2021 },
    { firstName: "Charlie", lastName: "Davis", yearBorn: 1978, yearDeath: 2050 },
    { firstName: "David", lastName: "Wilson", yearBorn: 1995, yearDeath: 2045 },
    { firstName: "Eve", lastName: "Brown", yearBorn: 1982, yearDeath: 2070 },
    { firstName: "Frank", lastName: "Miller", yearBorn: 1970, yearDeath: 2035 },
    { firstName: "Grace", lastName: "Thomas", yearBorn: 2000, yearDeath: 2080 },
    { firstName: "Henry", lastName: "Lee", yearBorn: 1988, yearDeath: 2055 },
    { firstName: "Ivy", lastName: "Anderson", yearBorn: 1992, yearDeath: 2090 },
    { firstName: "Jack", lastName: "Wilson", yearBorn: 1975, yearDeath: 2040 }
];

// Array prototype.filter()
// 1. Filter the list of people who are born in the year 1990 and above
// The method specified inside the filter is a function to be executed
// const ninty = people.filter(function(aboveNinty){
// if(aboveNinty.yearBorn >= 1990){
    // return true
// }
// })
//   Example using an arrow function method
// const eighty = people.filter(person => person.yearBorn >= 1980)

// console.table(ninty)
// console.table(eighty)


// Array.protoType.map()
// 2. Give us the list of people with first and last name using map
// It returns a new Array
// Example using Arrow Functions
// const Names = people.map(personName => ({firstName:personName.firstName , lastName: personName.lastName}))
// console.table(Names)


// Array.protoType.sort()
// 3. Sort the people array birthDate from oldest to youngest

// const old_young = people.sort((a,b) => a.yearBorn - b.yearBorn)
// console.table(old_young)

// Example with another syntax
// const old_young = people.sort(function(a,b){
//     if(a.yearBorn > b.yearBorn){
//         return 1
//     }
//     else{
//         return -1
//     }
// })
// console.table(old_young)


// Array.protoType.reduce()
// 4. How many years did all the people in the people live
// const totalAge = people.reduce((total, person) => {
    // return total + (person.yearDeath - person.yearBorn)
// }, 0)  //Add a zero cause we dont have an initial total to start the loop
// console.log(totalAge)


// 5. Sort the people by years lived
// const yearsLived = people.sort((a,b) => ((a.yearDeath - b.yearBorn) > (a.yearDeath - b.yearBorn) ? 1 : -1))
// console.table(yearsLived)



// 6. Sort the names that have de in their fullNames
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-page-container')
// const fullNames = Array.from(category.querySelectorAll('a'))
// const de = fullNames
//                .map(nameDe => nameDe.textContent)
//                .filter(Names => Names.includes('de'))



// 7. Sort the people firstName by alphabetical order
// const sortNames = names.sort()
// console.log(sortNames)


// 8. Sum up the instances of each of these
// const data = ['car' , 'car', 'truck', 'van', 'truck', 'walk', 'truck', 'van', 'walk', 'car', 'walk']

// const sortData = data.reduce((obj, item)=>{
//     if(!obj[item]){
//         obj[item] = 0
//     }else{
//         obj[item]++ //Usually we could just do this line but since we dont have the key of the object we should specify the if else statement
//     }
// }, {}) // The empty object is where the reduce function is initialized

