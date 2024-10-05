import { Navigate } from "react-router-dom";
import React from 'react';

const ProtectedRoutes = ({children}) => {
  
    let auth =  localStorage.getItem('token') // Retrieving token from localStorage
    console.log("token",auth)

    if (!auth){
      console.log('valid')
      return(<Navigate to = "/" />)
    }

    return (
        auth ? children : null
    );
}

export default ProtectedRoutes;
