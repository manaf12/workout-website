const { useState } = require("react")
import useSignUp from "../hooks/useSignUp";
import {BarLoader} from "react-spinners";
const Signup = ()=>{
        const [email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        const {signup,error,isLoading}=useSignUp();
        const handleSubmit = async(e)=>{
                e.preventDefault();
                setTimeout( 
                        await signup(email,password)
                ,5000)
             
        }
        return (
                <form className="signup" onSubmit={handleSubmit} >
                        {isLoading ? <BarLoader color="#36d7b7" />:(
                                <>
                    <h3>Sign up </h3>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                    <button disabled={isLoading}>On Submit</button>
                    {error && <div className="error">{error}</div>} 
                                </>
                    )
                    }
                </form>
        )
}

export default Signup;