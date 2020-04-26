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