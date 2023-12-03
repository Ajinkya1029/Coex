import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Login from './pages/login';
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
])

const root = ReactDOM.createRoot(document.getElementById('homepage'));
root.render(
 <RouterProvider router={router}/>
);



