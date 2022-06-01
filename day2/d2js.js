let child1 =
{
    name: "monu",
    age: 10,
    class : "art",
    teacher : "sachi"
}

let child2 =
{
    name : "mina",
    age: 9,
    class: "art",
    teacher: "karthik"
}

function showData(object)
{
    console.log("this is school of art",object);
    console.log(object.name,object.age,object.class,object.teacher);
}

showData(child1);
showData(child2);



function showDetails(object)
{
    console.log("this is school of art",this);
    console.log(this.name,this.age,this.class,this.teacher);
}

showDetails.call(child1);
showDetails.call(child2);

showDetails.apply(child1,["honey",10,"music","harry"]);

showDetails.bind(child2);



function child(name,age)
{
    this.name = name;
    this.age = age;
}

let c1 = new child("chintu",10);
console.log(c1);
console.log(new child("chinnu",10));
console.log(c1);
c1.class = "art";
console.log(c1);

child.prototype.school = "sort school";
c1.activity = "basketball";
console.log(c1.school);
console.log(c1.activity);

console.log(c1.__proto__);
console.log(c1.__proto__.__proto__);
console.log(c1.__proto__.__proto__.__proto__);



/*
c1 is the object created using functional constructor.

each object have the prototype 


*/


/*setTimeout is a web api  */
//PROTOTYPE Example
function Student() {
    this.fname = 'Kang';
    this.lname = 'Taehyun';
}

Student.prototype.age = 20;

var stObj1 = new Student();
console.log(stObj1.age); //20

//OBJECT Example
let Pet = 
{
    name : "brodie",
    breed : "poodle",
    age : 2,
    hobbies : "travelling"
}
// const pet =new Pet();
Pet.color = "brown";
console.log("pet details:",Pet.breed); //pet details: poodle

//Function Constructor

const greet = new Function();
console.log(greet());

const sum = new Function('var1', 'var2', 'return var1 + var2');
console.log(sum(10,90));  //100

//Inheritance Example
let fruit =
{
    color : "orange",
    name: "orange",    
}
let has =
{
    vitamin : "c",
    calories : 47
}

 has.__proto__ = fruit ;

 console.log(has.name,has.vitamin);

 //CALLBACK
 function add()
 {
     console.log("add greeting");
 }
function greeting()
{
    console.log("good evening");
}
add(greeting()); // good evening add greeting
greeting(add()); // add greeting good evening

function callAfter2sec()
{
    setTimeout(()=>
    {
        console.log("a message after two seconds");
    },2000)
}
callAfter2sec();

function CallbackHell()
{
    setTimeout(()=>
    {
        console.log("function 1");
        setTimeout(()=>
        {
            console.log("function 2");
            setTimeout(()=>
            {
            console.log("function 3");
        
            },5000)
        
        },4000)
    },3000)
}

CallbackHell();



























