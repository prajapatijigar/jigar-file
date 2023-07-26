import React, { Component, } from 'react';
import ClassComponentMenu from "./ClassRoutesMenu";
import { Route, Routes } from 'react-router-dom';
import PropsComponent from "./PropsInClassComponent"
import BasicLevelReact from "./BasicLevelReact"
import StateInClass from './StateInClass';

class ClassRoutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<ClassComponentMenu />}>
                        <Route path="props" element={<BasicLevelReact />} />
                        <Route path='intro' element={<h2>intro</h2>} />
                        <Route path="props" element={<PropsComponent />} />
                        <Route path="state" element={<StateInClass />} />
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default ClassRoutes;