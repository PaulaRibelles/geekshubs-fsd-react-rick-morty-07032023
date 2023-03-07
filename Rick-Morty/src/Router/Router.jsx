import {createBrowserRouter} from "react-router-dom"

import {Home} from "./layout/Home"
import {Login} from "./layout/Login"

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);