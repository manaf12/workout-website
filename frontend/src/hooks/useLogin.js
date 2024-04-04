import { useState } from "react";
import {useAuth }from './useAuth'
import React from 'react'
export const useLogin = () => {
    const [isLoading,setIsLoading]= useState(null);
    const [ error,setError] = useState(null);
    const {dispatch } =useAuth();
    const login = async(email,password) =>{

        setIsLoading(true)
        setError(null)
            const response = await fetch('/api/user/login',{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
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
                    setIsLoading(false)
                }

    }

  return {login,error,isLoading}
}


