export default (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_BUSINESS': 
            return action.payload
        default : 
            return state
    }
}