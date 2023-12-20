import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Login from './pages/login';
import ContactUsPage from './pages/contactus';
import ServiceTable from './pages/servicetable';
import AllSiding from './pages/allsiding';
import MiningCard from './pages/miningcard';
import SignUp from './pages/signup';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
const router=createBrowserRouter([
    {
    path:'/',
    element:<Home/>,
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"contactus",
        element:<ContactUsPage/>
    },
    {
        path:"services",
        element:<ServiceTable/>
    },
    {
        path:"allsiding",
        element:<AllSiding/>
    },
    {
        path:"miningcard",
        element:<MiningCard/>,
    },
    {
        path:"signup",
        element:<SignUp></SignUp>
    }
])

const root = ReactDOM.createRoot(document.getElementById('homepage'));
root.render(
 <RouterProvider router={router}/>
);



