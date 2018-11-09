import {SET_CURRENT_USER} from '../actionTypes';
import {apiCall, setTokenHeader} from '../../services/api';
import {addError, removeError} from './errors';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function setAuthToken(token) {
    setTokenHeader(token);
}

export function signout() {
    return dispatch => {
        localStorage.clear();
        setAuthToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `/api/auth/${type}`, userData)
            .then(({token, ...user}) => {
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject();
            });
        });
    }
}
