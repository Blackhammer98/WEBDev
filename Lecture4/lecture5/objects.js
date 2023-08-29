

//Constructor function;


//the value of this keyword inside the constructor function points to object being created
/*/
function Person(name,age){

this.name=name;
this.age=age;
}
Person.prototype.sayHi=function(){
    return'Hello my name is ${this.name} and my age is ${this.age}';
}
console.log(Person.prototype);
let person1= new Person("Nikit",29);
let person2= new Person("kashish",19);
let person3= new Person("nishant",18);
let person4= new Person("rashuit",20);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);/*/





/*/let arr1= new Array(1,2,3,4,5);
//let arr2 = new Array(6,7,8,9);
arr1.__proto__.indexOf =function(){
    
   console.log("indexOf") ;
}

arr1.indexOf();
//console.log(arr1.toString());
//console.log(Array.prototype);

//console.log(arr1.__proto__===Array.prototype);
//console.log(arr1.__proto__.__proto__===Object.prototype);/*/

//ARROW FUNCTION
/*/const person ={
    name:"NIkit",
    sayName:function(){
        console.log(this.name);
        var sayMyName=()=>{
            console.log(this);
        }
        return sayMyName;
    }
}
  const f1 =  person.sayName();
  f1();/*/


//Event Loop architecture

    console.log(1);

    setTimeout(()=>{
        console.log(2)
    }
    )



    console.log(3);