import * as ActionTypes from './actions';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';
  
export const postComment = (beerId, rating, comment) => (dispatch) => {
    apiClient.post(baseUrl + 'comments', {
        beerId : beerId,
        rating: rating,
        comment: comment
    })
    .then(response => {
        return response.data;
    })
    .then(dispatch(fetchComments()));
}
  
export const fetchComments = () => (dispatch) => {
    apiClient.get(baseUrl + 'comments')
    .then(response => {
        return response.data;
    })
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
