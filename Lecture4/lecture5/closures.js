//In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
 //The closure preserves the outer scope inside its inner scope.
//closure is a function that remember its outer variables and can access them
  function  x(){
    let a =5;
    function y(){

     
        
        function z(){
        console.log(a);
       
        }
        z();
    }


 y();

  }
x();






// function grandfather(){
//     let a=5;

//     function parent(){
//         let b =6;

//         function child(){
//             let c = 7;
//             return a+b+c;
//         }
//         return child;

//     }
//     return parent;

// }
// let parent=grandfather();
// let child=parent();
// let ans=child();
// console.log(ans);