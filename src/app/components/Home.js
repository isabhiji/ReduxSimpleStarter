import React from 'react';

export default class Home extends React.Component {
    static defaultProps ={
        starter: 0
    }
    
    constructor(props) {
        super(props)
        //state owned by component, mutable
        this.state = {
            counter: props.starter,
            show:true
        }
    }

    increment(){
        console.log("increment called");
        this.state.counter++;//Bad, mutating state directly
        //triger react to call render method
        this.forceUpdate();
        //this.setState({});
    }

    //createing function only once per componnet instance
    //Es.Next
    //resolve this in class scope
    decrement = () => {
        //console.trace();
        console.log('decrement caled');
        //Good way
        //takes new state as input, batch update, merge state, async
        //finaly trigger react to call render
        this.setState({
            counter:this.state.counter-1
        })
    }

    // es.next
    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        console.log('component didmount');
        // this.timer = setInterval( () => {
        //     console.log("Home interval ", this.state.counter);
        //     this.setState({
        //         counter : this.state.counter + 1
        //     })
        // }, 1000);
    }

    componentWillUnmount(){
        console.log("Home will unmount");
        clearInterval(this.timer);
    }

    render() {
        console.log("Home render");
        return (
            <div>
                <h2>Home</h2>
                <button onClick={this.toggle}>show/hide counter</button>
                { this.state.show && 
                <div>
                    <p>Counter</p>
                    <span>{this.state.counter}</span>
                </div>
                }

                    {/*aigning function to react */}
                    {/*react will call function */}
                    <button onClick={()=>this.increment()}>
                    Increment</button>

                    <button onClick={this.decrement}>
                    Dec</button>
            </div>
        )
    }
}