import seguroApi from '../api/seguru';

export const getAllBusiness = () => {
    return async dispatch => {
        const response = await seguroApi.get('/business/get');
        dispatch({type: 'GET_ALL_BUSINESS', payload: response.data});
    }
}

export const getAllInsurances = () => {
    return async dispatch => {
        const response = await seguroApi.get('/insurance/get');
        dispatch({type: 'GET_ALL_INSURANCES', payload: response.data});
    }
}

export const getProductsByBussiness = (businessId) => {
    return async dispatch => {
        const response = await seguroApi.get(`/product/get/${businessId}`);
        dispatch({type: 'GET_PRODUCTS_BY_BUSINESS', payload: response.data});
    }
}

export const getCoversByProduct = (coverId) => {
    return async dispatch => {
        const response = await seguroApi.get(`/cover/get/${coverId}`);
        dispatch({type: 'GET_COVERS_BY_PRODUCT', payload: response.data});
    }
}

export const logIn = (username, password) => {
    return async dispatch => {
        var response = await seguroApi.post('/user/logIn', {username, password})
        dispatch({type: 'LOG_IN', payload: response.data});
    }
}

export const changePath = (path) => {
    return {type: 'CHANGE_PATH', payload: path}
}