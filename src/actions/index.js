import seguroApi from '../api/seguru';

export const getAllBusiness = () => {
    return async dispatch => {
        const allBusiness = await seguroApi.get('/business/get');
        dispatch({type: 'GET_ALL_BUSINESS', payload: allBusiness.data});
    }
}