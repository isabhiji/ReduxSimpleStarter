import React from 'react';
import PropTypes from 'prop-types';
// whenever JSX used, must import React

// functional component
// React calls the functional component, takes v.dom
// create and return virtual dom
export default function Footer(props) {
    console.log("Footer render");
    return (
        <div>
            <hr />
            <p>Copyrights @{props.year} {props.company}</p>
            {/*props.chhildren */}
            {props.children}
        </div>
    )
}
// keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // mandatory
    company: PropTypes.string // optional
}

Footer.defaultProps = {
    company: 'React App'
}