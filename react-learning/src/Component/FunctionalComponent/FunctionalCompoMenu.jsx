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
                </ol>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;