import React, { Component, } from 'react';
import ClassComponentMenu from "./ClassRoutesMenu";
import { Route, Routes } from 'react-router-dom';
import PropsComponent from "./PropsInClassComponent";
import BasicLevelReact from "./BasicLevelReact"
import StateInClass from './StateInClass';
import CondiRenderingInClassCompo from "./CondiRenderingInClassCompo"
import Controlled from "./ControlledClass";
import ListKeysInClassCompo from "./ListKeysInClassCompo"
import StateLifeCycle from "./StateLifeCycleInClsssCompo" 


class ClassRoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<ClassComponentMenu />}>
                        <Route path="basiclevel" element={<BasicLevelReact/>} />
                        <Route path='intro' element={<h2>intro</h2>} />
                        <Route path="props" element={<PropsComponent />} />
                        <Route path="state" element={<StateInClass />} />
                        <Route path="conditionrendering" element={<CondiRenderingInClassCompo />} />
                        <Route path="controlled" element={<Controlled />} />
                        <Route path="listkeys" element={<ListKeysInClassCompo />} />
                        <Route path='statelifecycle' element={<StateLifeCycle/>} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassRoutes;