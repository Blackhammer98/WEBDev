import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import"./Login.css";
import { useEffect, useState } from 'react';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate=useNavigate();

    useEffect(()=>{
        const email = localStorage.getItem("email");
        const name = localStorage.getItem("name");
        const token = localStorage.getItem("token");

        if (email && name && token) {
           navigate(-1);
        }

    },[])

   



    const [userId,setUserId]= useState("");
    const [password, setPassword] = useState("");
    const [errorMessage,setErrorMessage]=useState("");
    
   

    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onUserIdChange =(e)=>{
         setUserId(e.target.value);
    }

    const onLogin=async(e)=>{
        setErrorMessage("");
        e.preventDefault();

        try{
         const response = await login({userId,password});

          const{accessToken,name,email,userStatus,userTypes}=response.data;
          localStorage.setItem("token",accessToken);
            localStorage.setItem("name",name);
            localStorage.setItem("userId",userId );
            localStorage.setItem("email",email);
            localStorage.setItem("userStatus",userStatus);
            localStorage.setItem("userTypes",userTypes);
         navigate("/")
        }
         catch(e){
            
            setErrorMessage("invalid userid or password");
       
        }
    }

    return<div className='form bg-dark text-light'>
            <Form onSubmit={onLogin}>
                <Form.Group className="mb-3" >
                    <Form.Label>User Id</Form.Label>
                    <Form.Control onChange={onUserIdChange} value={userId} type="text" placeholder="Enter UserId" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={onPasswordChange} value={password} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='btn-success' type="submit">
                    Submit
                </Button>

                <div className='text-danger'> {errorMessage}</div>
            </Form>
          </div>
    }

    


export default Login;