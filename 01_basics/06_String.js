const fName = 'Aditya'
const lName = "Thakur"

// console.log(fName + lName); Outdated

//String Interpolation 
console.log(`Hello my First name is ${fName} and my Second name is ${lName}`)

//another way of declaring a String
const gameName = new String("Pubg")
console.log(`I love to play ${gameName}`)
console.log(`${gameName[0]}`)
console.log(gameName.__proto__);

//Some Basic Methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('b'));

const newGameName = gameName.substring(0,3)
console.log(newGameName);

const newGameName2 = gameName.slice(-4,2)
console.log(newGameName2);

const newStringOne = "          Aditya       "
console.log(newStringOne.trim());

const url = "http://bit.ly/adityathakur10"
console.log(url.replace('10','20'))

console.log(url.includes("adityathakur"))
console.log(url.includes('d'));

const newName="Aditya Thakur is a fullsatck web developer"
console.log(newName.split(' '))
 
