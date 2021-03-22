import * as ActionTypes from './actions';

export const reservationReducer = (state = {
        isLoading: true,
        errMess: null,
        reservations: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_RESERVATIONS:
            return {...state, isLoading: false, errMess: null, reservations: action.payload};

        case ActionTypes.RESERVATIONS_LOADING:
            return {...state, isLoading: true, errMess: null, reservations: null};

        case ActionTypes.RESERVATIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, reservations: null};

        case ActionTypes.ADD_RESERVATION:
            var reservation = action.payload;
            return { ...state, reservations: state.reservations.concat(reservation)};

        default:
            return state;
    }
}