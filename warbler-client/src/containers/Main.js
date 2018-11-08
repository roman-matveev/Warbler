import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import Homepage from '../components/Homepage';

const Main = props => {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/'
                    render={props => <Homepage {...props} />}
                />
            </Switch>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));
