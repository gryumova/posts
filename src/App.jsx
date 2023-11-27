import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './styles/App.css'
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('auth')) {
          setIsAuth(true);
      }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <NavBar></NavBar>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
