import React from "react";
import {createBrowserRouter} from "react-router-dom"
import Header from "./Common/Header";
import Home from "./Home";
import About from "./About"
import ContactUS from "./CountactUs"
import Example from "./Example"
 
const router =  createBrowserRouter([
    {
        path : "/" ,
        element: <><Header/><Home/></>
    },
    {
        path : "/about" ,
        element: <><Header/><About/></>
    },
    {
        path : "/contactus" ,
        element: <><Header/><ContactUS/></>
    },
    {
        path : "/example" ,
        element: <><Header/><Example/></>
    }
])

export default router
