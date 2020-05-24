import {createReducer} from 'redux-create-reducer'

const initialState = {
    currentIndex: 0
}

export const sidebar = createReducer(initialState,{
    ['SELECT_TAB'] : (state = 0, action) => {
        return Object.assign({}, state, {
            currentIndex: action.payload
        });
    }
});