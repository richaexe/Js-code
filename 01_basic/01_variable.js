const accountId = 14445
let accountEmail = "cricha0120@gmail.com"
var accountPassword ="1234"
accountCity = "Delhi"
let accountState;
//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Don't use var because of 
   block scope and functional scope
*/

accountEmail ="abc@gmail.com"
accountPassword = "345"
accountCity ="Jaipur"
console.table([accountId,accountEmail,accountPassword,accountCity])