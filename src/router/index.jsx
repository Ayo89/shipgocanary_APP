import { createBrowserRouter, redirect } from "react-router-dom"
import Root from "../layout"
import Home from "../pages/Home/Home"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export default router