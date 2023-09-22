import React, { Component } from "react";
import StudentData from "./StudentData"

class StateLifeCycle extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            data: true
        };
    }

    // componentWillMount() {
    //     console.log("componentwillmount");
    // }
    
    // // componentDidUpdate(preProps, preState, snapshot) {
    // //     // this.setState({ count: this.state.count + 1 })
    // //     console.log("componentdidupdate", preState.count, this.state.count);
    // //     if (preState.count = this.state.count) {
    // //         console.log("prestate and state data is same")
    // //     }
    // // }
    // shouldComponentUpdate() {
    //     console.log("shouldComponent  called");
    // }

    // componentWillUnmount() {
    //     console.log("componentwillunmount");
    // }


    render() {
        console.log("render called");
        return (
            <>  
                 
                
                <h3>hello i am lifecycle in class component</h3>

                <p>count : {this.state.count}</p>
                <p>data : {(this.state.data) ? <StudentData /> : "false"}</p>
                <StudentData/>
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>count</button>&nbsp;
                <button onClick={() => { this.setState({ data: !this.state.data }) }}>toggle button</button><br /><br />
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230804133715/gfg.png" alt="lifecycle" />



            </>
        )
    }
}

export default StateLifeCycle;