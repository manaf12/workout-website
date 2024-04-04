import { useState } from "react"; 
import {useLogin } from "../hooks/useLogin";
const Login  = ()=>{
        const{login,isloading,error} = useLogin();
        const [email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        const handleSubmit = async(e)=>{
                e.preventDefault();
                await login(email,password);
                console.log(email,password)
        }
        return (
                <form className="signup" onSubmit={handleSubmit} >
                    <h3>Log in  </h3>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                    <button disabled={isloading}>On Submit</button>
                    {error && <div className="error">{error}</div>}
                </form>
        )
}

export default Login;