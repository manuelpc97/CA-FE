import {createReducer} from 'redux-create-reducer';

let initialState = {
    covers: []
}

export const cover = createReducer(initialState, {
    ['GET_COVERS_BY_PRODUCT']: (state = [], action) => {
        return Object.assign({}, state, {
            covers: action.payload
        });
    }
});