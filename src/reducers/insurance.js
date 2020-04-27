import {createReducer} from 'redux-create-reducer';

let initialState = {
    insurances: []
}

export const insurance = createReducer(initialState, {
    ['GET_ALL_INSURANCES'] : (state = [], action) => {
        return Object.assign({}, state, {
            insurances: action.payload
        });
    }
});