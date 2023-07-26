import React, { Component } from 'react';

class StateInClass extends Component {

     constructor(props){
        super(props);
        this.state = {
            car: "audi- etron-gt",
            color : "grey",
            modal : 2023
        }
     }

     changecolor = () => {
        this.setState ({
            color: "blue"
        })
     }
    render() {
        return (
            <div>
                <p> the car name is {this.state.car}, modal is {this.state.modal}, {this.state.color}</p>
                <button onClick={this.changecolor}>click</button>
            </div>
        );
    }
}

export default StateInClass;