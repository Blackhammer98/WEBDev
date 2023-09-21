// async function showResponse(){
//       try{
//             let promise = new Promise((resolve, reject) => {
//                   reject("promise rejected");
//                 })
          
//                 let result = await promise;
//             console.log(result);
//       }
//       catch(err){
//             console.log("error occured::", err);
//       }
// }
    
// showResponse();

const getUsersData = async () => {
try{
      const promise= await fetch("https://mockdata.prakashsakari.repl.co/users");
      const response=await promise.json();
      console.log(response);
}
catch(err){

    throw err;
     

}
}
 getUsersData();