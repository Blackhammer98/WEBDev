
import './App.css';
import { useState } from "react";
 import UserList from './components/userList/userList';
import Login from './components/Login/login';


 

 //states in react to controle something we need states
function App(){

  const [ isLoggedIn , changeIsLoggedIn] = useState(false);
     console.log(" inside app component");
     
     function onLogin(){
      changeIsLoggedIn(true);
     }
      function onLogOUt(){

        changeIsLoggedIn(false);

      }

  return <div>

    


  {
      (isLoggedIn) ?<UserList onLogOut={onLogOUt}/>:<Login  onLogin={onLogin}/>
  }

  </div>
    
}
   export default App;