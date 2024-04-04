import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuth =  ()=>{
        const context = useContext(AuthContext);
        if(!context) {
                throw Error ('must be used inside AuthContextProvider')
        }
        return context;
}