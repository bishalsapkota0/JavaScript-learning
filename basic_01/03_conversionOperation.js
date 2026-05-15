let score = "33abc"


console.log(typeof(score));
let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber));
// "33"-->33
//33abc -->NaN 
//true -->1
//false -->0

let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//""-->false
//"bishal"-->true

let someNumber = 33;
let stringNUmber = String(someNumber);
console.log(stringNUmber);
console.log(typeof(stringNUmber));

///****************Operations *********************** */

let value = 3;
let negValue = -value;
console.log(value+negValue);
//** power raised */
//% remainder

let str1 = "bishal";
let str2 = " hello";
let str3 = str1 + str2;
console.log(str3);


console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");
console.log(+true);

let x = 3;
const y= x++;
console.log(x);
console.log(y);
//??
//y = 3 then x = 4


let a = 3;
const b = ++a;
console.log(a);
console.log(b);
//a = 4 and then b = 4