let score =  "33D"

console.log(typeof score);
console.log(typeof(score));

//conversion of string into number
let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber);

//"33" => 33
//"33D" => NaN (Not a number)
//"true/false" => 1/0
//null => 0
//undefined => Nan

let isLoggedIn = 1

let booleanIsLength = Boolean(isLoggedIn)
console.log(booleanIsLength);
console.log(typeof booleanIsLength);

//1 => true
//"" => false
//"aditya" => true

let num = 20
let stringNum = String(num)
console.log(num);
console.log(typeof stringNum)