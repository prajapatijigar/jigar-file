import React, { Children } from 'react';
import { Form, useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from "./FunctionalCompoMenu"
import FunctionalComponentIntro from "./FunctionalComponentIntro"
import PropsInFuncCompo from "./PropsInFuncCompo"
import StateInFunctiCompo from "./StateInFunctiCompo"
import UseEffectFunCompo from "./UseEffectFunCompo"
import UseImperativefunCompo from "./UseImperativeHandler"
import UseMemoInFunCompo from "./UseMemoInFunCompo"

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
                },
                {
                    path: "useimperative",
                    element: <UseImperativefunCompo />
                },
                {
                    path: "usememo",
                    element: <UseMemoInFunCompo />
                }
            ]
        }
    ]);
    return routes;
};

export default FunctionRoutes;