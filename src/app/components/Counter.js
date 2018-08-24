//Counter.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//import store from "../store";
//import * as actions from "../state/action";

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    //    this.UnsubscribeFn = store.subscribe(() => {
    //         console.log('Home subcribed');
    //         this.forceUpdate();// To do: look for better approach
        //})
    }

    componentWillUnmount() {
        //console.log(his.UnsubscribeFn)
        //this.UnsubscribeFn();
    }

    increment = () => {
        let action = actions.increment(1)
        console.log("Action ", action)

        store.dispatch(action)
        console.log("STATE", store.getState())
    }

    decrement = () => {
        
    }
    
    render() {
        console.log("Counter renderd")

        const state = store.getState()// need subscribe to get updated value
        return (
            <div> 
            <h2>Counter - {state.counter}</h2>

            <button onClick={this.increment}>
                +1
            </button>

            <button onClick={this.decrement}>
                -1
            </button>
            

            </div>
        )
    }
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}