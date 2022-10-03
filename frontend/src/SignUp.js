import React, { useState } from 'react';

function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");
    const [errorSignup, setErrorSignup] = useState("");
    const [loading, setLoading] = useState(false);

    async function signup1(){
      let item = {username,password,user,conpassword,email,mobile};
      //console.log(username + " " + password + " " + user + " " + conpassword + " " + email + " " + mobile);
      if(password!==conpassword){
        setError('Password & Confirm password Mismatch')
      }else{
        const res = await fetch("http://localhost:8080/addUser/",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(item)
        })
        .then((response)=> {
          response.json();
          if(response.status===200){
            props.history.push("/login1");  
          }else{
            setErrorSignup("Already Registered.. Please login");
          }
        })
            
      }
    }  

  return (
    <div className='col-sm-5 mx-auto'>
      <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
        <div>
          <h3 className='text-center'> Register </h3>
          <div>{errorSignup && <><small style={{ color: 'red' }}>{errorSignup}</small><br /></>}
            <div>
            User*<br />
            <select class="form-control" id="user" required onChange={(e)=>setUser(e.target.value)}>
                <option value=''></option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>                
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
                Email*<br />
                <input type="email"  className='form-control' id='email' onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
            </div>
            <div style={{ marginTop: 10 }}>
                Username<br />
                <input type="text" className='form-control'  id='username' onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div style={{ marginTop: 10 }}>
                Mobile<br />
                <input type="mobile"  className='form-control' id='mobile' onChange={(e)=>setMobile(e.target.value)} />
            </div>
            
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" className='form-control'  id='password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div style={{ marginTop: 10 }}>
                Confirm Password<br />
                <input type="password"  className='form-control' id='conpassword' onChange={(e)=>setConpassword(e.target.value)} />
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
            </div>

            
            <div style={{ marginTop: 30 }}>
                <center><input type="button" className='btn btn-info' value='SignUp' onClick={signup1}/></center><br />
            </div>
            <div className='text-center'>Already a user?<br/><a style={{textDecoration: 'none'}} href='login1'>Login</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignUp;