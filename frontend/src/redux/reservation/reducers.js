import * as ActionTypes from './actions';

export const reservationReducer = (state = {
        isLoading: true,
        errMess: null,
        reservations: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_RESERVATIONS:
            return {...state, 
                isLoading: false, 
                errMess: action.message, 
                errors: null, 
                reservations: action.payload
            };

        case ActionTypes.RESERVATIONS_LOADING:
            return {...state, 
                isLoading: true, 
                errMess: action.message, 
                errors: null, 
                reservations: null
            };

        case ActionTypes.RESERVATIONS_FAILED:
            return {...state, 
                isLoading: false, 
                errMess: action.message, 
                errors: action.errors, 
                reservations: null
            };

        case ActionTypes.ADD_RESERVATION:
            var reservation = action.payload;
            return { ...state, 
                reservations: state.reservations.concat(reservation)
            };

        default:
            return state;
    }
}