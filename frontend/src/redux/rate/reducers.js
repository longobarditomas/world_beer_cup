import * as ActionTypes from './actions';

export const RateReducer = (state = { isLoading: true,
    errMess: null,
    rates:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RATES:
            return {...state, isLoading: false, errMess: null, rates: action.payload};

        case ActionTypes.RATES_LOADING:
            return {...state, isLoading: true, errMess: null, rates: []}

        case ActionTypes.RATES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};