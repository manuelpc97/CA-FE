import seguroApi from '../api/seguru';

export const getAllBusiness = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get('/business/get').catch((error) => dispatch(promptError(error)));;
        if(getState().error.error === true) return;
        dispatch({type: 'GET_ALL_BUSINESS', payload: response.data});
    }
}

export const getAllInsurances = () => {
    return async (dispatch,getState) => {
        const response = await seguroApi.get('/insurance/get').catch((error) => dispatch(promptError(error)));
        if(getState().error.error === true) return;
        dispatch({type: 'GET_ALL_INSURANCES', payload: response.data});
    }
}
export const getAllProducts = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/get`).catch((error) => dispatch(promptError(error)));
        console.log('RESPONSE: ', response);
        if(getState().error.error === true) return;
        dispatch({type: 'GET_ALL_PRODUCTS', payload: response.data});
    }
}

export const getProductsByInsurance = (insuranceId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/getByInsurance/${insuranceId}`).catch((error) => dispatch(promptError(error)));
        if(getState().error.error === true) return;
        dispatch({type: 'GET_PRODUCTS_BY_INSURANCE', payload: response.data});
    }
}

export const getProductsByBussiness = (businessId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/getByBusiness/${businessId}`).catch((error) => dispatch(promptError(error)));
        if(getState().error.error === true) return;
        dispatch({type: 'GET_PRODUCTS_BY_BUSINESS', payload: response.data});
    }
}

export const getCoversByProduct = (coverId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/cover/get/${coverId}`).catch((error) => dispatch(promptError(error)));
        if(getState().error.error === true) return;
        dispatch({type: 'GET_COVERS_BY_PRODUCT', payload: response.data});
    }
}

export const logIn = (username, password) => {
    return async (dispatch,getState) => {
        var response = await seguroApi.post('/user/logIn', {username, password}).catch((error) => dispatch(promptError(error)));
        if(getState().error.error === true) return;
        dispatch({type: 'LOG_IN', payload: response.data});
    }
}

export const changePath = (path, params = {}) => {
    return {type: 'CHANGE_PATH', payload: {path, params}}
}

export const createUser = async (user) => {
    return await seguroApi.post('/user/create', user);
}

export const cleanError = () => {
    return {
        type: 'CLEAN_ERROR', 
        payload: ''
    }
}

export const promptError = (message) => {
    return {
        type: 'ERROR', 
        payload: message
    }
}

export const selectTab = (index, params = {}) => {
    return {
        type: 'SELECT_TAB', 
        payload: {index, params}
    }
}