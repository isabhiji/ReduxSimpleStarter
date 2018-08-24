// bootstraping

import React from "react";
import {render} from "react-dom";
import App from './app/App';

//bind virtual dom to real dom

//render => diffing, patching real dom

// const App = function(){
//     return <div>Hi</div>  
// }

// render(<App/>, document.querySelector('.container'))

render( 
    <App />,
    document.querySelector('.container') //real dom
)