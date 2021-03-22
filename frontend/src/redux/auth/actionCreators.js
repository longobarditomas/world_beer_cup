import * as ActionTypes from './actions';
import apiClient from '../../services/api';

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    dispatch(requestLogin(creds))

    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        apiClient.post('/login', creds)
        .then(response => {
            localStorage.setItem('token', response.config.headers['X-XSRF-TOKEN']);
            localStorage.setItem('loggedIn', true);
            dispatch(receiveLogin(response));
            /* dispatch(fetchFavorites()); */
            /* history.push('/beers'); */
        }).catch(error => dispatch(loginError(error.message)))
    });    

}

export const requestSignin = (creds) => {
    return {
        type: ActionTypes.SIGNIN_REQUEST,
        creds
    }
}

export const receiveSignin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const signinError = (message) => {
    return {
        type: ActionTypes.SIGNIN_FAILURE,
        message
    }
}

export const signinUser = (creds) => (dispatch) => {
    dispatch(requestSignin(creds))
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        apiClient.post('/register', creds)
        .then(response => {
            console.log('responseee', response)
            dispatch(receiveSignin(response));
        }).catch(error => console.log('errror', error.message)  /* dispatch(loginError(error.message)) */)
    });    

}

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    apiClient.post('/logout').then(response => {
        dispatch(requestLogout())
        if (response.status === 204) {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');
            dispatch(receiveLogout(response));
        }
    })
}