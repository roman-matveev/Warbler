import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwtDecode from 'jwt-decode';
import {configureStore} from '../store';
import {setAuthToken, setCurrentUser} from '../store/actions/auth';
import Navbar from './Navbar';
import Main from './Main';

const store = configureStore();

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    try {
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
    } catch (err) {
        store.dispatch(setCurrentUser({}));
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <div className='onboarding'>
                <Navbar />
                <Main />
            </div>
        </Router>
    </Provider>
);

export default App;
