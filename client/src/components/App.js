import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// setting actions as an object
import * as actions from '../actions';

import Nav from './Nav';
import Home from './Home';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';

class App extends Component {

    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        return (
            <div className="container">
                <Nav />
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/surveys" exact component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);