import { createBrowserRouter, redirect } from "react-router-dom"
import Root from "../layout"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  }
])

export default router