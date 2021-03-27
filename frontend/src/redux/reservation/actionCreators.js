import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const fetchReservations = () => (dispatch) => {
    dispatch(reservationsLoading(true));
    apiClient.get(baseUrl + 'reservations')
    .then(response => {
        return response.data;
    })
    .then(reservations => dispatch(addReservations(reservations)))
    .catch(error => {
        dispatch(reservationsFailed(error.message));
        handleError(error.response);
    });
}

function handleError(response) {
    if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
    }
}

export const reservationsLoading = () => ({
    type: ActionTypes.RESERVATIONS_LOADING
});

export const reservationsFailed = (errmess) => ({
    type: ActionTypes.RESERVATIONS_FAILED,
    payload: errmess
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
    apiClient.post(baseUrl + 'reservations', data)
    .then(response => {
        return response.data;
    })
    .then(reservation => dispatch(addReservation(reservation)));
}

export const deleteReservation = (reservationId) => (dispatch) => {
    apiClient.delete(baseUrl + 'reservations/' + reservationId)
    .then(response => {
        return response.data;
    })
    .then(reservations => dispatch(addReservations(reservations)))
    .catch(error => dispatch(reservationsFailed(error.message)));
};