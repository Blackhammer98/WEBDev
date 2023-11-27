import UnAuthorised from "../Components/commons/UnAuthorised/unauthorised";
import Unautheticated from "../Components/commons/Unauthenticated/unauthenticated";


function AuthHoc( props){



   const pageId=props.id;

   const isAdmin=localStorage.getItem("userTypes")==="ADMIN";
   // check wether the user is authenticated or not

   let isAuthenticated=localStorage.getItem("userId") && localStorage.getItem("token");

   if(!isAuthenticated){

      return <Unautheticated/>
   }


   if(pageId==="createMovie" && !isAdmin){

      return<UnAuthorised/>
   }


   return props.children;

}


export default AuthHoc;