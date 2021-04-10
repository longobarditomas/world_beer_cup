import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const fetchReservations = () => (dispatch) => {
    dispatch(reservationsLoading(true));
    if (localStorage.getItem('token')) {
        apiClient.get(baseUrl + 'reservations')
        .then(response => {
            return response.data;
        })
        .then(reservations => dispatch(addReservations(reservations)))
        .catch(error => {
            if (error.response.status && error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('loggedIn');
            }
            dispatch(reservationsFailed(error.message));
        });
    } else {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
    }
}

export const reservationsLoading = () => ({
    type: ActionTypes.RESERVATIONS_LOADING
});

export const reservationsFailed = (message, errors) => ({
    type: ActionTypes.RESERVATIONS_FAILED,
    message,
    errors
});

export const addReservations = (reservations) => ({
    type: ActionTypes.ADD_RESERVATIONS,
    payload: reservations
});

export const addReservation = (reservation) => ({
    type: ActionTypes.ADD_RESERVATION,
    payload: reservation
});

export const postReservation = (data) => (dispatch) => {
    console.log(data)
    apiClient.post(baseUrl + 'reservations', data)
    .then(response => {
        return response.data;
    })
    .then(reservation => dispatch(addReservation(reservation)))
    .catch(error => {
        if (error.response.status && error.response.status === 422) dispatch(reservationsFailed(error.message, error.response.data.errors))
        else dispatch(reservationsFailed(error.message, null))
    })
}

export const deleteReservation = (reservationId) => (dispatch) => {
    apiClient.delete(baseUrl + 'reservations/' + reservationId)
    .then(response => {
        return response.data;
    })
    .then(reservations => dispatch(addReservations(reservations)))
    .catch(error => dispatch(reservationsFailed(error.message)));
};