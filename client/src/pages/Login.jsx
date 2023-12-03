import React from "react";
import SignUpForm from "../components/LoginComponents/SignUpForm"; 
import Content from "../components/LoginComponents/Content";
import Stars from "../components/UI/stars/Stars"
import "../styles/Login.css"

const Login = () => {
    return (
        <div className="login">
            <Stars/>
            <Content/>
            <SignUpForm/>
        </div>
    )
}

export default Login;