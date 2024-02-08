// ***** Primitive *****
//7 types - String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//******Reference Type (Non-Primitive)*******

//Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj ={
    name:"code",
    age:18,
}

const myfunction = function(){
    console.log("code")
}

console.log(typeof anotherId)