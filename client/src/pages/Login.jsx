import React, { useContext } from "react";
import { AuthContext } from "../context";
import SignUpForm from "../components/LoginComponents/SignUpForm"; 
import Content from "../components/LoginComponents/Content";
import Stars from "../components/UI/stars/Stars"
import "../styles/Login.css"

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    }

    return (
        <div className="login">
            <Stars/>
            <Content/>
            <SignUpForm login={login}/>
        </div>
    )
}

export default Login;