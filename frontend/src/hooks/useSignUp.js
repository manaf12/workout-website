import { useState } from "react";
import {useAuth }from './useAuth'

import React from 'react'
const useSignUp = () => {
    const [isLoading,setIsLoading]= useState(null);
    const [ error,setError] = useState(null);
    const {dispatch}=useAuth();
    const signup = async(email,password) =>{

        setIsLoading(true)
        setError(null)
            const response = await fetch('/api/user/signup',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                body:JSON.stringify({email,password})

            })
            const json = await response.json();
            if(!response.ok){
                    setError(true);
                    setIsLoading(null);
                    console.log(error)

                }
             if(response.ok){
                    //save the user to the local storage
                    localStorage.setItem('user',JSON.stringify(json))
                    //update the auth context
                    dispatch({type:"LOGIN",payload:json});
                    console.log("this is the paylouad" , json.token)
                    setIsLoading(false)
                }

    }

  return {signup,error,isLoading}
}

export default useSignUp ;
