import React, { useContext, useMemo} from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import MyButton from "./UI/button/MyButtton";
import { AuthContext } from "../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

   const outBtnStyle = useMemo(()=> {
        if (!isAuth) return {display:"none"}
        return {};
    }, [isAuth]);

    return (
        <div className="navbar">
            <MyButton
                onClick={logOut}
                style={outBtnStyle}
            >
                Выйти
            </MyButton>
            <div className="navbar_links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    )
}

export default NavBar;