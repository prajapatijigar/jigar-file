import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClassComponentMenu extends Component {
    render() {
        return (
            <>
                <ol>
                    <li><Link to="basiclevel">Basic Level - ReactJS Interview Questions</Link></li>
                    <li><Link to="intro">introduction of class component</Link></li>
                    <li><Link to="props">props</Link></li>
                    <li><Link to="state">state</Link></li>
                    <li><Link to="conditionrendering">conditionrendering</Link></li>
                    <li><Link to="controlled">controlled</Link></li>
                    <li><Link to="listkeys">listkeys</Link></li>
                </ol>
                <Outlet></Outlet>

            </>
        )
    }
}
export default ClassComponentMenu