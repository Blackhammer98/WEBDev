//recusrion is a progamming term where function called from itself
//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
// it means repeating action


// using recusrion method

function calculateSumRecursive(number){
if  (number===1){
    return number;
}
return number+calculateSumRecursive(number-1);
}

const result = calculateSumRecursive(10);
console.log(result);

// function calculaterSum(number){
//  let total = 0;
//     for( i=1;i<=number;i++){
//    total = total+i;
//     }
//     return total;


    
// }

// const results = calculaterSum(5);

 
// console.log(results);