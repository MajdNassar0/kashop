import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import Login from"./page/login/Login";
import Register from "./page/register/Register";
import AuthLayout from "./layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            index:true ,
            element:<Home />
        },{
            path:"cart",
            element:<Cart />
        }
    ]
  },
  {
    path: "/auth",
    element:<AuthLayout/>,
    children:[
        {
            path:"login",
            element:<Login />
        },{
            path:"register",
            element:<Register/>
        }
    ]
  },
]);
export default router