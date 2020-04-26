export default (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_INSURANCES': 
            return action.payload;
        default:
            return state;
    }
}