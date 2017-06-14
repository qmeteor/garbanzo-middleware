/**
 * Created by Bien on 2017-06-14.
 */
import {
    FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload];
    }

    return state;
}