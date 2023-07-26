import React,{Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./CommonComponent/Header";
import Home from "./Home";
import About from "./About";
import Example from "./Example";
import Menu from "./Menu";
import Blog from "./Blog";
import Shop from "./Shop";
import Contact from "./Contact"

const ClassComponentRoute = React.lazy(() =>import("./Component/ClassComponent/ClassRoutes.jsx"))
const FunctionComponentRoute = React.lazy(()=> import("./Component/FunctionalComponent/FunctionRoutes.jsx"))
const router = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><Home /></>,
    },
    {
        path: "/About",
        element: <><Header /><About /></>,
    },
    {
        path: "/example",
        element: <><Header /><Example /></>,
        children: [
            {
                path: "classcomponent/*",
                element: <Suspense fallback={<h2>Loading....</h2>}> <ClassComponentRoute /> </Suspense>
            },
            {
                path: "functioncomponent/*",
                element: <Suspense fallback={<h2>Loading....</h2>}> <FunctionComponentRoute /> </Suspense>
            },
        ]
    },
    {
        path: "/menu",
        element: <><Header /><Menu /></>,
    },
    {
        path: "/blog",
        element: <><Header /><Blog /></>,
    },
    {
        path: "/shop",
        element: <><Header /><Shop /></>,
    },
    {
        path: "/contact",
        element: <><Header /><Contact /></>,
    },


]);

export default router