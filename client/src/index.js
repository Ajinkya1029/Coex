import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Login from './pages/login';
import ContactUsPage from './pages/contactus';
import AllSiding from './pages/allsiding';
import MiningCard from './pages/miningcard';
import SignUp from './pages/signup';
import Request from './pages/request';
import GetRequests from './pages/getrequest';
import CoalRequestHandler from './pages/coalrequesthandler';
import Notifications from './pages/notification';
import UpdateReq from './pages/updaterequest';
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
    },
    {
        path:"req",
        element:<Request/>
    },{

        path:"getrequest",
        element:<GetRequests></GetRequests>
    },{
        path:"coalstatus",
        element:<CoalRequestHandler/>
    },{
        path:"notification",
        element:<Notifications></Notifications>
    },
    {
        path:"updatereq",
        element:<UpdateReq></UpdateReq>
    }
])

const root = ReactDOM.createRoot(document.getElementById('homepage'));
root.render(
 <RouterProvider router={router}/>
);



