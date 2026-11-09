const accountId = 1232424;
let accountEmail = "arin@gmail.com";
var accountPassword = '12233224';
accountCity = 'Bhubaneswar';
let accountState;
// accountId = 122132323, //not allowed
// accountEmail = 'siku@gmail.com';
// accountPassword = '112232424';
// accountCity = 'kendrapara';

/*
Prefer not to use var
 beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

