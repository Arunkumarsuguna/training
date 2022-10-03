{/*
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';


function Login(props) {

  
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    var c = "&username="+a+"&password="+b;
    console.log("username: " + a)
    console.log("password: " + b)
    fetch('http://localhost:8080/LoginCheck?'+c)
        .then((response)=>response.text())
        .then((ans)=>{           
           console.log("ANSWER IS :"+ans)
           if(ans==="yes"){
            props.history.push('/dashboard');
           }
           else{
            props.history.push('/login');            
           }
        });    
  }

  return (
    <div className='col-sm-4 mx-auto'>
      <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
       <h1 className='text-center'>Login</h1><br/>
        <div>
          Username<br />
          <input type="text" id='username' className='form-control' autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type="password" id='password' className='form-control' autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type="button" className='btn btn-info' value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        <br/><br/><div className='text-center'>New User/Admin?<br/><a style={{textDecoration: 'none'}} href='signup'>SignUp</a></div>
      </div>
    </div>  
  );
} 

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
*/}