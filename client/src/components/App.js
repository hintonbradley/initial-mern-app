import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';

const App = () => {
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
};

export default App;