import React, { Children } from 'react';
import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from "./FunctionalCompoMenu"
import FunctionalComponentIntro from "./FunctionalComponentIntro"
import PropsInFuncCompo from "./PropsInFuncCompo"
import StateInFunctiCompo from "./StateInFunctiCompo"
import UseEffectFunCompo from "./UseEffectFunCompo"
import UseImperativefunCompo from "./UseImperativeHandler"
import UseMemoInFunCompo from "./UseMemoInFunCompo"
import UseCallbackInFuncCompo from "./UseCallbackInFuncCompo"
import StyledCompo from "./StyledCompo"
import HoneyCombTask from "./HoneyCombTask"
import UseContextInFuncCompo from "./UseContextInFuncCompo"
import UseContextTask from "./01UseContextTask"
import UseReducerInFunc from "./UseReducerInFunc"
import RegistrationForm from "./RegistrationForm"
import APIExample from './APIExample';
import FormValidation from './FormValidation';
import DynamicTable from "./DynamicTable"
import TodoList  from './TodoList'
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
                },
                {
                    path: "styled",
                    element: <StyledCompo />
                },
                {
                    path: "usecallback",
                    element: <UseCallbackInFuncCompo />
                },
                {
                    path: "honeycomb",
                    element: <HoneyCombTask />
                },
                {
                    path: "usecontext",
                    element: <UseContextInFuncCompo />
                },
                {
                    path: "usecontexttask",
                    element: <UseContextTask />
                },
                {
                    path: "usereducer",
                    element: <UseReducerInFunc />
                },
                {
                    path: "registrationform",
                    element: <RegistrationForm/>
                },
                {
                    path: "apiexample",
                    element: <APIExample/>
                },
                {
                    path: "formvalidation",
                    element: <FormValidation/>
                },
                {
                    path: "dynamictable",
                    element: <DynamicTable/>
                },
                {
                    path : "todolist",
                    element : <TodoList/>
                }
            ]
        }
    ]);
    return routes;
};

export default FunctionRoutes;