const accountId = "12556"
let accountName = "himanshu"
var accountEmail = "himanshu@google.com"
accountBalance = 500000

// cannot edit a const variable in javascript 
// accountId = "23432"

// with "//" we can add single line comments in javascript

accountName = "Rohit"
accountEmail = "rohit@google.com"
// with /* */  this we can multiple line comments in javascript
console.log(accountName)

//console.table([]) - helps to print the multiple variables in table
console.table([accountId,accountName,accountEmail,accountBalance])

//Note : var keyword is not used today because of problem of functional and block scope 
// instead we use let and const only as variables and constant in javascript

