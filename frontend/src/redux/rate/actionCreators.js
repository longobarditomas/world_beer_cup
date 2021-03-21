import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const fetchRates = () => (dispatch) => {
    apiClient.get(baseUrl + 'beers/top_beers')
    .then(response => {
        return response.data;
    })
    .then(rates => dispatch(addRates(rates)))
    .catch(error => dispatch(ratesFailed(error.message)));
}

export const ratesLoading = () => ({
    type: ActionTypes.RATES_LOADING
});

export const ratesFailed = (errmess) => ({
    type: ActionTypes.RATES_FAILED,
    payload: errmess
});

export const addRates = (rates) => ({
    type: ActionTypes.ADD_RATES,
    payload: rates
});