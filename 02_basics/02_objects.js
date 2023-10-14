//singleton

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name:"Aditya",
    age:20,
    year:"3rd",
    isLoggedIn: true,
    lastLoginDays:["Mon","Wed"],
    "full name":"Aditya Thakur",
    [mySym]:"myKey1"
}

JsUser.name="Adarsh"
// Object.freeze(JsUser)
JsUser.name="Aditya"
console.log(JsUser["name"])

console.log(JsUser.name);
console.log(JsUser["name"])

// console.log(JsUser.full name) causes error
console.log(JsUser["full name"])

console.log(typeof JsUser["mySym"])

JsUser.greeting = function(){
    console.log(`Hello Js user ${this.name}`)
}

console.log(JsUser.greeting())

