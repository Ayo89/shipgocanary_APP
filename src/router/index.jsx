import { createBrowserRouter, redirect } from "react-router-dom"
import Root from "../layout"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import CreateShipment from "../pages/CreateShipment/CreateShipment"


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
      },
      {
        path: 'create-shipment',
        element: <CreateShipment />
      }
    ]
  }
])

export default router