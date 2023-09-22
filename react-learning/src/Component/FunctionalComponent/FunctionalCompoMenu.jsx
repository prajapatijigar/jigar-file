import React from 'react';
import { Link, Outlet } from "react-router-dom"

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className='col-lg-6 offset-lg-6'>
                <ol>
                    <li><Link to="FunctionalIntro">FunctionalIntro</Link></li>
                    <li><Link to="stateinfun">state</Link></li>
                    <li><Link to="propsinfun">props</Link></li>
                    <li><Link to="useeffect">useeffect</Link></li>
                    <li><Link to="useimperative">UseImperative</Link></li>
                    <li><Link to="usememo">Usememo</Link></li>
                    <li><Link to="styled">styled</Link></li>
                    <li><Link to="usecallback">usecallback</Link></li>
                    <li><Link to="honeycomb">HoneyCombTask</Link></li>
                    <li><Link to="usecontext">UseContextInFuncCompo</Link></li>
                    <li><Link to="usecontexttask">UseContextTask-FullName</Link></li>
                    <li><Link to="usereducer">UseReducer</Link></li>
                    <li><Link to="registrationform">Registration- Form</Link></li>
                    <li><Link to="apiexample">Api-Example</Link></li>
                    <li><Link to="formvalidation">Form-validation</Link></li>
                    <li><Link to="dynamictable">Dynamic-Table</Link></li>
                    <li><Link to="todolist">Todo-List</Link></li>
                </ol>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;