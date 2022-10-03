import React, { useState} from 'react'
//import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Login1(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");

    async function login(){
        if(email==null || password==null || email==="" || password===""){
            setError("Please enter values");
        }else{
            let result = await fetch("http://localhost:8080/login/"+email+"/"+password)
            .then((response)=>response.text())
            .then((ans)=>{
                console.log("ANSWER: " + ans)
                if(ans.startsWith("true")){
                    if(ans.endsWith("admin")){
                        props.history.push('/admindashboard');
                    }else{
                        props.history.push('/dashboard');
                    }
                }
                else{
                    setError('Invalid Username/Password !')
                }
            })
        }
    }
    return (
        <div>
            <div className='col-sm-4 mx-auto'>
                <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
                    <h1 className='text-center'>Login</h1><br />
                    <div>
                        Username<br />
                        <input type="text" id='username' 
                        onChange={(e)=>setEmail(e.target.value)}
                        className='form-control'/>
                    </div><br/>
                    <div>
                        Password<br />
                        <input type="password" id='password' 
                        onChange={(e)=>setPassword(e.target.value)}
                        className='form-control'/>
                    </div>
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                    <br/>
                    <button className='btn btn-primary' onClick={login}> Login </button>

                    <br/><br/><div className='text-center'>New User/Admin?<br/><a style={{textDecoration: 'none'}} href='signup'>SignUp</a></div>
                </div>
            </div>
        </div>
    );
}
export default Login1;