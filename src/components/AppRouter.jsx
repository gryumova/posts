import React, { useContext } from "react"
import { Route, Routes, Navigate} from "react-router-dom"
import { publicRoutes, privateRoutes } from "../router/index"
import { AuthContext } from "../context"

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
        ?
            <Routes>
                { privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
        :
            <Routes>
                { publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    )
}

export default AppRouter;