import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Payment from './Pages/Payment'
import Category from "./Pages/Category"
import Details from "./Pages/Details"
import Dashboard from "./Pages/Dashboard"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/category",
      element:<Category/>
    },
    {
      path:"/details",
      element:<Details/>
    },
    {
      path:"/payment",
      element:<Payment/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
