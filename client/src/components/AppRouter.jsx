import React, { useContext } from "react"
import { Route, Routes, Navigate} from "react-router-dom"
import { publicRoutes, privateRoutes } from "../router/index"
import {Context} from "../index"
import { observer } from "mobx-react-lite"

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
            <Routes>
                {user.isAuth && privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )}
                { publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )}
                <Route path="/*" element={<Navigate to="/about" replace />} />
            </Routes>
    )
})

export default AppRouter;