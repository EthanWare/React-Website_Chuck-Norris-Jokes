import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './index.css';
import Main from './main';
import Search from './search';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </Router>
);

ReactDOM.render(  
    routing,
    document.getElementById("root")
);