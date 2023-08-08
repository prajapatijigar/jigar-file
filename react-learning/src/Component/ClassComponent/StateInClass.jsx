import React, { Component } from 'react';

class StateInClass extends Component {

    //  constructor(props){
    //     super(props);
    //     this.state = {
    //         car: "audi- etron-gt",
    //         color : "grey",
    //         modal : 2023
    //     }
    //  }

    state = {
        name: "jigar",
        age: 21
    };

    clickHandle = () => {
        this.setState({
            name: "somabhai",
            age: 62
        })
    }

    // changecolor = () => {
    //     this.setState({
    //         color: "blue"
    //     })
    // }
    render() {
        return (
            <div>
                {/* <p> the car name is {this.state.car}, modal is {this.state.modal}, {this.state.color}</p>
                <button onClick={this.changecolor}>click</button> */}

                <ol>
                    <li>https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state</li>
                    <li><h2>What Is &apos;State&apos; in ReactJS?</h2>
                        <p> The state is a built-in React object that is used to contain data or information about the component.</p>
                        <p>A component&apos;s state can change over time; whenever it changes, the component re-renders.</p>
                        <p>The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.</p>
                        <h2>state:</h2>
                        <p>A state isan object that stores the values of peoperties belonging to a component that could change over a period of time</p>
                        <p>A state can be modified based on the use action or network changes</p>
                        <p>Every time the state of an object changesO&#769;Resct re-render the component to the browser</p>
                        <p>The state object is initialized in the constructor</p>
                        <p>The state object can store multiple propertis</p>
                        <p>this.setstate() is used to change the value of the state object</p>
                        <p>setstate() function perform a shallow merge between the new and the previous this.state.</p>

                    </li>
                </ol>

                <p>my name is {this.state.name},my age {this.state.age}</p>
                <button onClick={this.clickHandle}>click</button>
            </div>
        );
    }
}

export default StateInClass;