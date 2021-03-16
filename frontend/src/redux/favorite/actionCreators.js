import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

export const postFavorite = (beerId) => (dispatch) => {
    apiClient.post(baseUrl + 'favorites', {beerId : beerId})
    .then(response => {
      return response.data;
    })
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}
    
export const deleteFavorite = (beerId) => (dispatch) => {
    apiClient.delete(baseUrl + 'favorites/' + beerId)
    .then(response => {
        return response.data;
    })
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {
    dispatch(favoritesLoading(true));
    apiClient.get(baseUrl + 'favorites')
    .then(response => {
        return response.data;
    })
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => {
        dispatch(favoritesFailed(error.message));
        handleError(error.response);
    });
}

function handleError(response) {
    if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
    }
}

export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});