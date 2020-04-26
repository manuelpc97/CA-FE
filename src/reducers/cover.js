export default (state = [], action) => {
    switch(action.type){
        case 'GET_COVERS_BY_PRODUCT':
            return action.payload;
        default:
            return state;
    }
}