import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
// import Resume from "process.env.PUBLIC_URL + '/myfile.pdf'"

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                {/* <Route exact path="/resume" component={Resume} /> */}
                <Route component={App} />
            </Switch>


        </div>
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
