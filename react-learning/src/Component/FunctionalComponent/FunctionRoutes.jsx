import React, { Children } from 'react';
import { Form, useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from "./FunctionalCompoMenu"
import FunctionalComponentIntro from "./FunctionalComponentIntro"
import PropsInFuncCompo from "./PropsInFuncCompo"
import StateInFunctiCompo from "./StateInFunctiCompo"
import UseEffectFunCompo from "./UseEffectFunCompo"
 
const FunctionRoutes = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "FunctionalIntro",
                    element: <FunctionalComponentIntro />
                },
                {
                    path: "stateinfun",
                    element: <StateInFunctiCompo />
                },
                {
                    path: "propsinfun",
                    element: <PropsInFuncCompo />
                },
                {
                    path: "useeffect",
                    element: <UseEffectFunCompo />
                }
            ]
        }
    ]);
    return routes;
};

export default FunctionRoutes;