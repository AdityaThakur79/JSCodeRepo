//Date
let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

//Declaring own Date
// let myCreatedDate = new Date(2023,9,8)
// let myCreatedDate = new Date(2023,7,9,10,28)
let myCreatedDate = new Date("2023-10-08")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))  Inseconds

let newDate = new Date() 
// console.log(newDate.getMonth()+ 1)
// console.log(newDate.getDate())
// console.log(newDate.getDay())

let newDate1 = newDate.toLocaleDateString('default',{
     weekday:'long'
})

console.log(newDate1);