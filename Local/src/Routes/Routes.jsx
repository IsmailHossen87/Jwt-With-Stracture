import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import AddJobs from "../Pages/AddJobs";
import PrivateRoute from "../Context/PrivateRoute/PrivateRoute";
import MyPostedJobs from "../Pages/MyPostedJobs";
import EmailJobs from "../Pages/EmailJobs";

const Routes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            // {
            //     path:'/addJob',
            //     element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            // },
            // {
            //     path:'/my-posted-jobs',
            //     element:<MyPostedJobs></MyPostedJobs>
            // },
            // {
            //     path:'/emailJobs',
            //     element:<PrivateRoute><EmailJobs></EmailJobs></PrivateRoute>
            // }
        ]
    }
])

export default Routes;