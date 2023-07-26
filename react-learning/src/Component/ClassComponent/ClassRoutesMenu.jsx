import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClassComponentMenu extends Component {
    render() {
        return (
            <>
                <ol>
                    <li><Link to="biscreact">Basic Level - ReactJS Interview Questions</Link></li>
                    <li><Link to="intro">introduction of class component</Link></li>
                    <li><Link to="props">props</Link></li>
                    <li><Link to="state">state</Link></li>
                </ol>
                <Outlet></Outlet>

            </>
        )
    }
}
export default ClassComponentMenu