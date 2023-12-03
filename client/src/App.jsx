import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userApi";

const App = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      })
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
