
import React from "react";
import PropTypes from "prop-types";

export default function Contact(props) { 
    //property from react router
    let params = props.match.params;
    console.log("Props", props);
        return (
            <div> 
            <h2>Contact Page-{params.country}</h2>
            </div>
        )
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}