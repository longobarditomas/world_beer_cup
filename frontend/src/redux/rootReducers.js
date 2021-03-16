import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { BeerReducer } from './beer/reducers';
import { favoriteReducer } from './favorite/reducers';
import { reservationReducer } from './reservation/reducers';
import { CommentReducer } from './comment/reducers';
import { AuthReducer } from './auth/reducers';

const rootReducers = combineReducers({
    beers: BeerReducer,
    comments: CommentReducer,
    auth: AuthReducer,
    reservations: reservationReducer,
    favorites: favoriteReducer,
    ...createForms({
        feedback: InitialFeedback
    })
});

export default rootReducers;