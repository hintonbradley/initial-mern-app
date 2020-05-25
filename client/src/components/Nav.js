import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
    renderGoogleBtn () {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null:
                return "Loading..."
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>
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
    console.log('auth is: ', auth)
    return { auth }
}

export default connect(mapStateToProps)(Nav);