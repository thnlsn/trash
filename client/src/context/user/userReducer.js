// Function to decide what happens to state based on an action.

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS
} from '../types';

// UserState dispaches actions here, ad depending on the TYPE it does something, maybe with a payload...
export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            };
        case REGISTER_FAIL: // both these cases do the same thing
        case AUTH_ERROR: // both these cases do the same thing
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload // setting error in the payload to the one in msg in users.js
            };
        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload // setting error in the payload to the one in msg in users.js
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
    }
};
