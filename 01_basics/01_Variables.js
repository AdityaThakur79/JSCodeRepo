const accountId = 122
let accountEmail = "adityathakurbusiness@gmail.com"
var accountPassword = "Aditya@0508"
accountCity = "Thane"
let accountState;

// accountId = 124 chnage in const not allowed
console.log(accountId);

accountEmail="adi@gmail.com"
accountPassword="123ABC"
accountCity="Kandivali"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//prefer not to use var cause of issue in block scope and functional scope

console.log(typeof(accountCity));