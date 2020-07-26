// import React, {Component} from 'react';
import React from 'react'
import {Link} from 'react-router-dom';

// class Dashboard extends Component {
const Dashboard = () => {
    // render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    // }
}

export default Dashboard;