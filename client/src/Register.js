import React, { useState } from 'react';
import Axios from 'axios';
import Login from './Login';
function Register() {
  
  const [name, setName] =useState("");
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [log, setLog]= useState(false);
 
  const newUser ={
    name:name,
    email:email,
    password:password,
    password2:password2
  }
   
  const signup = () => {
    Axios.post('http://localhost:4000/users/register', newUser).then(response=>{
      console.log(response)
    })
    .catch( err => {console.log(err) });
  };

  const loging = ()=> {
    if(log === false){
      return (
        <div className="log-in">
          <h1>Register</h1>
          <input type="text" placeholder="name" name="name" onChange={
            (e) => {
              setName(e.target.value)
            }
          } ></input><br/>
          <input type="text" placeholder="email" name="email" onChange={
            (e) => {
              setEmail(e.target.value)
            }
          } ></input><br/>
          <input type="password" placeholder="password" onChange={
            (e) => {
              setPassword(e.target.value);
            }}></input><br/>
            <input type="password2" placeholder="password2" onChange={
            (e) => {
              setPassword2(e.target.value);
            }}></input><br/>
            <button className='button' onClick={() => { return signup()}} >SIGN UP</button><br/><br/><br/>
            <h2> if you already have an account you can log in</h2>
            <button className='button' onClick={() => { setLog(true)}}> LOG IN</button><br/><br/><br/>
        </div>
      )
    } else {
      return <Login/>
    }
  }
  return (
    <div>
      {loging()}
    </div>
  )
}
export default Register;