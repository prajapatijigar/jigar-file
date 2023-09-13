import React, { Component } from "react";

class StateLifeCycle extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        };
    }

    componentDidUpdate(preProps,preState, snapshot) {
        // this.setState({ count: this.state.count + 1 })
        console.log("componentdidupdate", preState.count, this.state.count);
        if(preState.count = this.state.count){
            console.log("prestate and state data is same")
        }

    }



    render() {
        return (
            <>
                <h3>hello i am lifecycle in class component</h3>

                <p>count : {this.state.count}</p>
                <button onClick={() => { this.setState({ count: 1 }) }}>button</button>


            </>
        )
    }
}

export default StateLifeCycle;