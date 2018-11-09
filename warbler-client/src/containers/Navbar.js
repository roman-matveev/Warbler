import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../images/logo.png';
import {signout} from '../store/actions/auth';

class Navbar extends Component {
    signout = e => {
        e.preventDefault();
        this.props.signout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to='/' className='navbar-brand'><img src={logo} alt="Warbler" /></Link>
                    </div>

                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav-navbar-nav navbar-right">
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                <a onClick={this.signout}>Sign Out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/signup'>Sign Up</Link></li>
                            <li><Link to='/signin'>Sign In</Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {signout})(Navbar);
