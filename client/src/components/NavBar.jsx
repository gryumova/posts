import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import MyButton from "./UI/button/MyButtton";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const router = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
            user.isAuth 
            ?
            <div className="navbar">
                <MyButton
                    onClick={logOut}
                >
                    Выйти
                </MyButton>
                <div className="navbar_links">
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>
            :
            <div className="navbar">
                <MyButton
                    onClick={() => router("/login")}
                >
                    Войти
                </MyButton>
            </div>
    )
})

export default NavBar;