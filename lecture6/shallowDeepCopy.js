 /* let a =5;
   let b =a;
   b++;
   console.log (a);
   console.log(b);

   let person1={
    name:"nikit",
    age:25
   }

   let person2= person1;
   person2.age++;
   console.log(person1.age);
   console.log(person2.age);/ */


   let person={
    fName: "nikit",
    lName:"sharma",
          address:{
            street:"wingpet  1st st.",
            city:"queens",
            state:"CA",
            counrty:"USA",

          }

   }

   /*/create a copy of this person object
   //shallow copy

 //let person2={...person};

person2.fName="shahid"
person2.address.street="xyz ist st"
// spread operator only do shallow copy means only copy outer object
only create a fisrt level object,it did not copy references.

console.log(person);
console.log(person2);

let personString= JSON.stringify(person);
let person2= JSON.parse(personString);

//Deep copy  creates a fisrrt level copy and nested arrays copy or object  too .

//Json is a opposite of stringify;

person2.fName="shahid";
person2.address.street="xyz ist st";


console.log(person);
console.log(person2);/*/

// callBack function()
/*/function a(wrapper){
    console.log("hello");
    wrapper();
}
function b(){
    console.log("bye");
}

a(b)/

console.log("Hello")

setTimeout(function callBack(){
  console.log("executrd after a delay");

},5000)/*/


