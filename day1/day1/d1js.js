/*
1.
Comparison operators can compare numbers or strings and perform evaluations. 
Expressions that use comparison operators do not return a number value as do arithmetic expressions. 
Comparison expressions return either 1 , which represents true, or 0 , which represents false.
= is used for assigning values to a variable in JavaScript.
"==" : it is used to compare whether the variables are same or not.
"===" : it is used to compare whether the variables are same or not and it also 
checks the datatype 
*/ 



const a=10,b=20;
let c = 10 , d = '10';
if(a == b)
{
    console.log("a & b are same");
}
else
{
    console.log("a & b are not same");
}
if(c === d)
{
    console.log("c & d are same");
}
else
{
    console.log("c & d are not same");
}

/*

spread operator : 
Spread operator : 
Spread syntax (...) allows an iterable such as an array expression or string to be 
expanded in places where zero or more arguments (for function calls) or elements 
(for array literals) are expected, or an object expression to be expanded in places 
where zero or more key-value pairs (for object literals) are expected.
Spread operator ( ... ) allows us to quickly 

spread operator is used to allows to expand the data into individual elements.
ex: arrays.
 */


let e = [2,4,1,3,5,6];

let res = e.filter(x => x%2 == 0);
console.log(...res);


/*
 var : var is a keyword which is accessible in the local and global scobe.
  The var is the oldest keyword to declare a variable in JavaScript. 
   Scope: Global scoped or function scoped. The scope of the var keyword is the 
   global or function scope. It means variables defined outside the function can be 
   accessed globally, and variables defined inside a particular function can be accessed within the function. 
             
 let : let is a keyword which is used to create temporary variables.
        by usig let , we can re-declare and re-intialize values.
         The let keyword is an improved version of the var keyword. 
   Scope: block scoped: The scope of a let variable is only block scoped. 
   It can’t be accessible outside the particular block ({block}).

const : const is a keyword in which we can't redeclare and reinitialize values.
 The const keyword has all the properties that are the same as the let keyword,
 except the user cannot update it.
   Scope: block scoped: When users declare a const variable, they need to initialize it, 
   otherwise, it returns an error. The user cannot update the const variable once it is declared. 

*/

var f = 10;
let g = 20;
const h = 20;

f = 20;
g = 30;
// h = 30;

var f = 30;
// let g = 40; Cannot redeclare block-scoped variable 'g'.
console.log(f); //30
console.log(g); //30
console.log(h); //20
//d1js.js:60 Uncaught TypeError: Assignment to constant variable.

/*

execution context :

execution context is a place that contains the code that is currently running.
in this, the code runs line by line,parsed and stored in memory. after the execution done then the instructions will be removedd to save the space. 
Execution context is the concept for describing the internal working of a code.
 In JavaScript, the environment that enables the JavaScript code to get executed is what we call 
 JavaScript Execution Context. It is the execution context that decides 
 which code section has access to the functions, variables, and objects used in the code. 
 During the execution context, the specific code gets parsed line by line then the variables and functions 
 are stored in the memory. An execution context is similar to a container that stores variables, and the code 
 gets evaluated and then executed. Thus, it is the execution context that provides an environment for the 
 specific code to get executed.*/


/* 
First class functions:
----------------------
A programming language is said to have First-class functions when functions in that language are treated like 
any other variable. For example, in such a language, a function can be passed as an argument to other functions, 
can be returned by another function and can be assigned as a value to a variable.
first class functions are functions that we can treat them as variables i.e , 
    - we can pass them as arguments to other functions ,
    - assign them to other variables or 
    - return by other functions.
*/




function add()
{
    // a =10;
    // b =20;
    // return c = a+b;
    // console.log(c);
    return "hello";
    
}
function result(res)
{
    console.log(res());
}

result(add);

/*
Closures :
---------
       A closure is a combination of nested functions and having return.
       it is used to access the outer function's data from inner function.
       A Closure is a combination of a function enclosed with references to its surrounding 
state (the lexical environment). In JavaScript, closures are created every time a function 
is created at run time. In other words, a closure is just a fancy name for a function that 
remembers the external things used inside it.
*/

function add(a,b)
{
    c = a+b;
    return function()
    {
        console.log(c);
    }
}

let addition = new add(10,20);
addition();