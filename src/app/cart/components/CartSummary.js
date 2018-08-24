// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent
export default class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    componentWillMount(){
        this.recalculate(this.props);
    }

    //TODO: calledon update cycle only
    //whenever parent render called on update cycle
    componentWillReceiveProps(nextProps){
        console.log("Cart summary will recieve props");
        console.log("crrent props", this.props);
        console.log("Next props", nextProps);

        if(this.props.count != nextProps.count){
            this.recalculate(nextProps);
        }
    }
    //Called on Update cycle only
    //called whenever parent render called on update cycle
    //called whenever this.setstate called on update cycle
    //will not call on force update
    shouldComponentUpdate(nextProps, nextState){
    //return false;
    console.log("Cart summary should update");
    console.log("current state",this.state);
    console.log("next state",this.state);

    return this.props.amount != nextProps.amount ||
    this.props.count != nextProps.count ||
    this.state.discount != nextState.discount ||
    this.state.grandTotal != nextState.grandTotal

    }

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}