export default (state = [], action) => {
    switch(action.type){
        case 'GET_PRODUCTS_BY_BUSINESS': 
            return action.payload;
        default:
            return state;
    }
}