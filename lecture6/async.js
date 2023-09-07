function getUsers(afterFetchingUsers){

  console.log("returning promise in pending state");

  return new Promise((resolve,reject)=>{

  
  console.log("executing  logic inside promise ");
  

    setTimeout(()=>{
     
        
       users=[ 
        {name: "nikit", email:"nk@gmail.com"},
       {name: "Kashish", email: "ks@yahoo.com"} 
    ] ;

   resolve(users);
   //reject("something went wrong")

    },2000)
  })
}

const requiredName="nikit";






  
     
  const promise = getUsers()

  promise.then((users)=>{
   
      const user=users.find(user=>user.name===requiredName);

      console.log(user);
  })
  .catch((err) =>{
  
    console.log("promise is rejected with err",err);
    })
  //when multiple then being used it is called promise chaining which is shown below:
  .then((data)=>{
   console.log(data);
  })
  
  .catch((err) =>{
  
    console.log("promise is rejected with err",err);
    })

  //to avoid callback hell we use or js introduce promise

  //Promise



 /*/ const promise=new Promise((resolve, reject) => {
    //contain actual business logic
  //  syntax for promise


    if(success){
      resolve(value)
    }
    else{
      reject(err)
    }
  })/*/


  //consuming a promise

  //promiseObj.then(onFullfilled,onRejected);