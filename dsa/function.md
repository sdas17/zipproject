function is bascially 
function =======
function declration
===================
function declration is to declred a function

function numvalue (num){
retrun num*num

}
console.log(numvalue(12))

function expression
================
when ever to store a afunction inside varible this is called function expression
const name= function (num){
return num*num
}
 first class function
 ================
First-class functions in JavaScript mean that functions are treated like any other variable. This allows functions to be passed as arguments to other functions, returned from functions, and assigned to variables.

In your example, the square function is passed as an argument to the multiple function, demonstrating the concept of first-class functions. 
function square(n){
return n*n;
}
function multiple(fn){
console.log('fn',+fn(5))

}
console.log(multiple(square))

what is iefe
===========
iefe immediatley expression function expression
==================================
(function square(a,b){
return a*b;
})(5,6)





