import {createReducer} from 'redux-create-reducer';

let initialState = {
    businesses: []
};

export const business = createReducer(initialState,{
    ['GET_ALL_BUSINESS']: (state = [], action) => {
        return Object.assign({}, state,{
            businesses: action.payload
        });
    }
})