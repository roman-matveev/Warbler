import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';

const Main = props => {
    const {authUser, errors, removeError, currentUser} = props;

    return (
        <div className="container">
            <Switch>
                <Route exact path='/'
                    render={props => <Homepage currentUser={currentUser} {...props} />}
                />
                <Route exact path='/signin'
                    render={props => {
                        return (
                            <AuthForm errors={errors} removeError={removeError} onAuth={authUser}
                                buttonText="Sign In" heading="Welcome back." {...props} />
                        );
                    }}
                />
                <Route exact path='/signup'
                    render={props => {
                        return (
                            <AuthForm errors={errors} removeError={removeError} onAuth={authUser}
                                signUp buttonText="Sign Up" heading="Join Warbler!" {...props} />
                        );
                    }}
                />
            </Switch>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));
