let number = 44
//exception of string conversion in javascript - 33a => NaN
let numberString = undefined

// console.log(typeof number) //checks typeof variable
// console.log(typeof(number)) //checks typeof method - variable inside () treated as method

// string to Number conversion method
let valueNumber = Number(numberString)
// console.log(valueNumber)

// String to Number conversion Notes
// "33" => 33
// "33abc" = NaN
// null => 0
// NaN => NaN
// undefined => NaN

let isLoggedIn = 2

let booleanisLoggedIn = Boolean(isLoggedIn)

// console.log(booleanisLoggedIn);

// Anything to Boolean Notes
// 1 => true; 0 => false;
// "" => false; "jake" => true
// null , undefined , NaN => false

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********************** Operations ******************************

let value = 3
let negValue = -value

// console.log(negValue)

//Arithematic operations

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(9%2)

// Concatenation of two strings

let string1 = "hello"
let string2 = " hitesh"

let string3 = string1+string2 
// console.log(string3)

// BODBMAS rule :) 

// console.log("1"+2)
// console.log(2+"1")
// console.log(2+2+"3")
// console.log(3+"2"+2)

// console.log(2+2*4%10) // not a good practice 

// boolean operations 

// console.log(+true)
// console.log(+"")

let num1,num2,num3 = 0

num1=num2=num3= 10
// console.log(num1+num2+num3)

// Increment and decrement operators
let gameCount = 0
gameCount++;
++gameCount;
// --gameCount;
// gameCount--;
console.log(gameCount)