import About from "../pages/About"
import Login from "../pages/Login"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"

export const publicRoutes = [
    { path: '/login', element: Login},
    { path: '/about', element: About },
]

export const privateRoutes = [
    { path: '/posts', element: Posts },
    { path: '/posts/:id', element: PostIdPage },
]