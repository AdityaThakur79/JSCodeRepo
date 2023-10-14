//Singleton Object
const instagramUser = new Object()

instagramUser.name="Aditya Thakur"
instagramUser.id="mai_adityathakur"
instagramUser.followers=500
// console.log(instagramUser)

const regularUser = {
    name:"Aditya Thakur",
    email:"adi@gmail.com",
    userfullname:{
        firstname:"Aditya",
        lastname:"Thakur"
    }
}

console.log(regularUser.userfullname.lastname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(instagramUser));
console.log(Object.values(instagramUser));
console.log(Object.entries(instagramUser));
console.log(instagramUser.hasOwnProperty("followers"))