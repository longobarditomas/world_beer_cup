import * as ActionTypes from './actions';

export const BeerReducer = (state = { isLoading: true,
    errMess: null,
    beers:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BEERS:
            return {...state, isLoading: false, errMess: null, beers: action.payload};

        case ActionTypes.BEERS_LOADING:
            return {...state, isLoading: true, errMess: null, beers: []}

        case ActionTypes.BEERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};