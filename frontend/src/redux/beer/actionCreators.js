import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const fetchBeers = () => (dispatch) => {
    apiClient.get(baseUrl + 'beers')
    .then(response => {
        return response.data;
    })
    .then(beers => dispatch(addBeers(beers)))
    .catch(error => dispatch(beersFailed(error.message)));
}

export const beersLoading = () => ({
    type: ActionTypes.BEERS_LOADING
});

export const beersFailed = (errmess) => ({
    type: ActionTypes.BEERS_FAILED,
    payload: errmess
});

export const addBeers = (beers) => ({
    type: ActionTypes.ADD_BEERS,
    payload: beers
});