import seguroApi from '../api/seguru';

export const getAllBusiness = () => {
    return async dispatch => {
        const allBusiness = await seguroApi.get('/business/get');
        dispatch({type: 'GET_ALL_BUSINESS', payload: allBusiness.data});
    }
}

export const getAllInsurances = () => {
    return async dispatch => {
        const allInsurances = await seguroApi.get('/insurance/get');
        dispatch({type: 'GET_ALL_INSURANCES', payload: allInsurances.data});
    }
}

export const getProductsByBussiness = (businessId) => {
    return async dispatch => {
        const products = await seguroApi.get(`/product/get/${businessId}`);
        dispatch({type: 'GET_PRODUCTS_BY_BUSINESS', payload: products.data});
    }
}

export const getCoversByProduct = (coverId) => {
    return async dispatch => {
        const covers = await seguroApi.get(`/cover/get/${coverId}`);
        dispatch({type: 'GET_COVERS_BY_PRODUCT', payload: covers.data});
    }
}