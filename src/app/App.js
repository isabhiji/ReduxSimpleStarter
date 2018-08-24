//App.js
import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
//import Cart from "./cart/components/Cart";
//Note, import from container
// import ReduxCounter from './containers/ReduxCounter';

import {BrowserRouter as Router, 
        Switch, 
        Route} from 'react-router-dom';

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div> 
            <h1>Loading ...</h1>
        </div>
    )
}
// webpack create separate bundle due to import()
// Cart is wrapper component, loaded only on need basis
const Cart = Loadable({
    loader: () => import('./cart/components/Cart'),
    loading: Loading,
  });


// class component
// react shall create object for class component
export default class App extends React.Component {
    //react keyword
    // create and return virtual dom/view
    render() {
        console.log('App render')
        return (
            <Router>
            <div>
                <Header title="Product App" />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/contact/:country" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Switch>
                {/* jsx comments */}
 
                {/* properties in react, props */}
                
                <Footer  company="Product App"
                         year={2016 + 2}   
                >
                  <p>Contact time: India 9:00 tp 5:00 PM</p>
                  <p>Contact time: USA 8:00 tp 5:00 PM</p>
                </Footer>
            </div>
            </Router>
           
        )
    }
}