// Primitive Datatype => 
// 7 types: String , Number , Boolean , null , undefined , symbol , BigInt 
const score = 222
const scoreValue = 100.33
const isLoggedIn =  true
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 2222222222222 
// console.log(bigNumber)

//Reference (Non Primitive)
//Array , objects , functions

const cricketers = ['Virat','Dhoni','Rohit']

let myObj = {
    name:"Aditya",
    age : 20,
    email:"aditya@gmail.com"
}

const myFirstFunction = function(){
    console.log("Hello Aditya!!!")
}

// console.log(typeof myFirstFunction);

// Calling Function Directly
// myFirstFunction();



//***************************************

//Stack (Primitive) Heap(Non-Primitive)

let myYoutubeName = "EngineeringShortsWala"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    name:"Aditya Thakur",
    email:"adi@gmail.com",
    upiId:"adi@upi"
}

let userTwo = userOne
userTwo.email = "aditya@gmail.com"

console.log(userTwo)
console.log(userOne)

//In stack the value we get is the copy of the variable
//In Heap we get the reference of the variable