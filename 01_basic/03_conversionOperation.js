let score= "33abc"
console.log(typeof score)
           //    Conversion
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" = 33
// "33abc" = NaN
// true = 1 ; false = 0

let isLoggedIn = 1
let boolenisLoggedIn = Boolean(isLoggedIn)
console.log(boolenisLoggedIn)

let num = 33
let numstring = String(num)
console.log(numstring)
console.log(typeof numstring)


//  *************Operations**************//

let value = 3
let negvalue = -value
console.log(negvalue)

// console.log(2+2)
// console.log(4-2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " world"
str3 = str1 +str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true); // 1
console.log(+""); // 0  (not a good code)