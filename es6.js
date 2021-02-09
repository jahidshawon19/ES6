// TOPIC: LET VS CONST 

//prog-1 
const x = 50; // fixed here 

 // we can't assign it 

console.log(x); // output will be 50

// prog-2
let a = 40;

if(true){
   let  a = 20;
    console.log(a); // here output will be 20
}
console.log(a); // here output will be 40

//**************************************************** *//

//TOPIC: Template String And Multi line String 

const name = "Jahid Hasan Shawon";
let age = 23;
let designation = "Software Engineer";
let salary = 50000;

const details = `

Name: ${name}\nAge: ${age}\nDesignation: ${designation}\nSalary: ${salary}

`
console.log(details);

//**************************************************** *//
//TOPIC: ARROW FUNCTION

//prog-1

const greetings = ()=>{
    console.log("Hello jahid");
}
greetings();

//prog-2

const sqr = x => x*x;

console.log(sqr(10));
//**************************************************** *//
//TOPIC: LEXICAL THIS 

//prog-1
const obj = {
    name: 'Rubab Tech',
    employee:38,
    display: function(){
        console.log(this); // output will be object
    }
}

obj.display();
//prog-2
const obj2 = {
    name: 'Rubab Tech',
    employee:38,
    display: function(){
        setTimeout(function(){
            console.log(this); // output will be window object
        }, 1000)
        
    }
}
obj2.display();
//prog-3
const obj3 = {
    name: 'Rubab Tech',
    employee:38,
    display: function(){
        setTimeout(function(){
            console.log(this);// output will be object
        }.bind(this), 1000);
    }
}
obj3.display();

// If we want to avoide the bind,arrow function helps us//
//prog-4
const obj4 = {
    name: 'Rubab Tech',
    employee:38,
    display: function(){
        setTimeout(()=>{ //here arrow function
            console.log(this); // output will be object
        },1000);
    }
}
obj4.display();
//**************************************************** *//
//TOPIC: Destructuring Arra and Object 

//prog-1 

const id = ['C173029','C173022','C173025'];
let [a,b,c] = id;

console.log(a); //output will be C173029

//prog-2

const obj = {
    name: 'jahid Hasan',
    age:23
}
let {name,age} = obj ;
console.log(name,age);

//prog-3

const person = {
    phone: 15864,
    country:'USA'
}

let {phone,country} = person;
console.log(phone,country);

let display = ({phone,country}) =>{
    console.log(`${phone} and ${country}`);
}
display({country,phone}); //althoug we did not maintain the sequence 

//**************************************************** *//
//TOPIC:Default Parameter, Rest And Spread Operator



//Prog: Default Parameter
const add = (a,b=a) => a+b;
console.log(add(10));

//prog: Spread Operator
let numbers = [10,20,30,40,50];
console.log(numbers); // output will be an array
console.log(...numbers); // separated elements of the numbers array

//prog: copy object with the help of spread operator

let obj  = {
    phone:458964,
    email:'hka@gmail.com',
}

let obj2 ={
    ...obj
}
console.log(obj2);

//******************************************************************** */
//TOPIC: CLASSES
class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    display(){
        console.log(`${this.name}| ${this.price}| ${this.quantity}`)
    }
}

let p1 = new Product('Chicken Pizza', 250,9);
p1.display();

//TOPIC: Inheritance

class Person{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    display(){
        console.log(`${this.name}| ${this.email}`);
    }
}

class Student extends Person{
    constructor(name,email,id){
        super(name,email);
        this.id = id;
    }
    display(){
        super.display();
        console.log(`${this.id}`);
    }
}

let std1 = new Student("jahid","email@gmail.com","C173029");
std1.display();