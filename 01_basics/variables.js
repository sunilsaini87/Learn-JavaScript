
// prefer not to use var because of scop problem
// not defining any variable is also not preferable

const accountId = 12222
let accountEmail = "sunil@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 222  // not allowed

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


accountEmail = "sss@gmail.com"
accountPassword = "1111"
accountCity = "bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);