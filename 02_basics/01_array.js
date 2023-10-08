//Arrays -> Collection of multiple items under a single variable name

const myArr = [0,1,2,3,4,true,"Aditya",null,undefined]
// console.log(myArr[6])
// console.log(myArr.length)

//Array Methods

myArr.push("Adarsh",10)
// console.table(myArr);

myArr.pop()
// console.table(myArr);

myArr.unshift(9)
// console.table(myArr);

myArr.shift()
// console.table(myArr)

// console.log(myArr.includes(6))
// console.log(myArr.indexOf("Aditya"));

//slice,spice
// console.log("A",myArr)

const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr)

//Splice manipulates the og array
const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("C",myArr)

