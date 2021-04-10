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
    if (localStorage.getItem('token')) {
        apiClient.get(baseUrl + 'favorites')
        .then(response => {
            return response.data;
        })
        .then(favorites => dispatch(addFavorites(favorites)))
        .catch(error => {
            if (error.response.status && error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('loggedIn');
            }
            dispatch(favoritesFailed(error.message));
        });
    } else {
        dispatch(favoritesFailed('401'));
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