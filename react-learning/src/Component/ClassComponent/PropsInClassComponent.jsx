import React, { Component } from 'react';
import ChildComponent from "./ChildComponent"
import image from "./statevsprops.webp"


class PropsInClassComponent extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8 mt-5">
                        <div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 mt-5">
                        <ChildComponent title= "card title" imagedata = 'https://mdbootstrap.com/img/new/standard/nature/184.webp'/>
                    </div>
                    <div className="col-3 mt-5">
                        <ChildComponent title= "card title" imagedata = 'https://mdbootstrap.com/img/new/standard/nature/184.webp'/>
                    </div>
                    <div className="col-3 mt-5">
                        <ChildComponent title= "card title" imageData= {process.env.PUBLIC_URL + 'images/statevsprops.webp'}/>
                    </div>
                    <div className="col-3 mt-5">
                        <ChildComponent title= "card title" imagedata = 'https://mdbootstrap.com/img/new/standard/nature/184.webp'/>
                    </div>
                    <div className="col-3 mt-5">
                        <ChildComponent title= "card title" imagedata = 'images/statevsprops.webp'/>
                    </div>
                </div>
            </>
        );
    }
}

export default PropsInClassComponent;