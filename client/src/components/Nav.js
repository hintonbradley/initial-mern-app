import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Nav extends Component {
    renderGoogleBtn () {
        switch (this.props.auth) {
            case null:
                return "Loading..."
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return [
                    <li key="payments-link"><Payments/></li>,
                    <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key="logout-link"><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={this.props.auth ? '/surveys':'/'} className='left brand-logo'>
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderGoogleBtn()}
                    </ul>
                </div>
            </nav>
        );
    }
};

// destructuring auth from Redux state object:
function mapStateToProps ({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Nav);