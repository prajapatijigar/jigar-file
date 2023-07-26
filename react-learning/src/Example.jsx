import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Example = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>ClassComponent and FunctionComponent</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3><Link to="classcomponent">ClassComponent</Link></h3>
                    </div>
                    <div className="col-6">
                        <h3><Link to="functioncomponent">FunctionComponent</Link></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Example;