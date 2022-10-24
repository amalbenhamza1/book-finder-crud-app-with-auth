import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import App from './App';

function LogIn(props) {
    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState(false);

    const [sign, setSign] = useState(false)
    const newUser = {  
        email:email,
        password:password
    }
    const login = () => {
        axios.post('http://localhost:4000/users/login', newUser).then(response => {
            setError(response.data.success)
            console.log(response.data.success)
        })
            .catch(err => { console.log(err) });
    }
    const goBookList = () => {
        if (errors === true) {
            return <div><App data={props.data} /></div>
        } else {
            return (<div>
                <div className="log-in" >
                    <h1>LOG IN</h1>
                   
                        <input type="text" placeholder='email' onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }} ></input><br />
                    <input type="password" placeholder='password' onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }}></input><br />

                    <button className='button' onClick={() => { return login() }}>Login</button><br /><br /><br />
                    <h3>if you don't have account you can sign up first</h3>
                    <button className='button' onClick={() => { setSign(true) }}>register</button><br /><br /><br />
                </div>
            </div>)
        }
    }
    const register = () => {
        if (sign === true) {
            return <Register />
        }
        else {
            return goBookList()
        }
    }
    return (
        <div>
            {register()}
        </div>
    )
}
export default LogIn;