import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class PropsInClassComponent extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-3">
                        <ChildComponent Title='TItle One' imgdata='https://mdbootstrap.com/img/new/standard/city/042.webp' />
                    </div>
                    <div className="col-3">
                        <ChildComponent Title='TItle Two' imgdata='https://mdbootstrap.com/img/new/standard/city/043.webp' />
                    </div>
                    <div className="col-3">
                        <ChildComponent Title='TItle Three' imgdata='https://mdbootstrap.com/img/new/fluid/city/055.webp' />
                    </div>
                    <div className="col-3">
                        <ChildComponent Title='TItle Four' imgdata='https://mdbootstrap.com/img/new/standard/city/042.webp' />
                    </div>
                </div>
            </div>
        );
    }
}

export default PropsInClassComponent;