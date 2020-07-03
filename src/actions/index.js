import seguroApi from '../api/seguru';

export const getAllBusiness = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get('/business/get').catch((error) => dispatch(promptError(error)));;
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_ALL_BUSINESS', payload: response.data });
    }
}

export const getAllInsurances = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get('/insurance/get').catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_ALL_INSURANCES', payload: response.data });
    }
}
export const getAllProducts = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/get`).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_ALL_PRODUCTS', payload: response.data });
    }
}

export const getProductsByInsurance = (insuranceId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/getByInsurance/${insuranceId}`).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_PRODUCTS_BY_INSURANCE', payload: response.data });
    }
}

export const getProductsByBussiness = (businessId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/product/getByBusiness/${businessId}`).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_PRODUCTS_BY_BUSINESS', payload: response.data });
    }
}

export const getCoversByProduct = (coverId) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/cover/get/${coverId}`).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_COVERS_BY_PRODUCT', payload: response.data });
    }
}

export const getAllCovers = () => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/cover/getAll`).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        dispatch({ type: 'GET_ALL_COVERS', payload: response.data });
    }
}

export const logIn = (username, password) => {
    return async (dispatch, getState) => {
        var response = await seguroApi.post('/user/logIn', { username, password }).catch(error => dispatch(promptError('Usuario incorrecto')));
        if (getState().error.error === true) return;
        dispatch({ type: 'LOG_IN', payload: response.data });
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT',
        payload: {}
    }
}

export const singUp = (newUser) => {
    return async (dispatch, getState) => {
        var response = await seguroApi.post('/user/create', newUser).catch(error => dispatch(promptError('Error creando usuario')));
        if (getState().error.error === true) return;
        if (response.status !== 200) {
            dispatch(promptError('Error creando usuario'));
            return;
        }
        dispatch({ type: 'LOG_IN', payload: response.data });
    }
}

export const changePath = (path, params = {}) => {
    return { type: 'CHANGE_PATH', payload: { path, params } }
}

export const createUser = async (user) => {
    return await seguroApi.post('/user/create', user);
}

export const saveFilledForm = async (filledForm, userId, productId) => {
    const timestamp = new Date();
    console.log('filledForm, userId, productId ---> ', filledForm, userId, productId);
    const body = {
        filledForm: JSON.stringify(filledForm).split('"').join('\''),
        userId,
        productId,
        timestamp,
    }
    return async (dispatch, getState) => {
        var response = await seguroApi.post('/form/saveFilled', body).catch(error => dispatch(promptError('Error creando formulario completo')));
        if (getState().error.error === true) return;
        if (response.status !== 200) {
            dispatch(promptError('Error creando formulario completo'));
            return;
        }
        dispatch({ type: 'SAVED_FILLED_FORM', payload: response.data });
    }
}

export const cleanError = () => {
    return {
        type: 'CLEAN_ERROR',
        payload: ''
    }
}

export const promptError = (message, type = 'error') => {
    return {
        type: 'ERROR',
        payload: { message, type }
    }
}

export const cleanNotification = () => {
    return {
        type: 'CLEAN_NOTIFICATION',
        payload: ''
    }
}

export const promptNotification = (message, type) => {
    return {
        type: 'NOTIFICATION',
        payload: { message, type }
    }
}

export const selectTab = (index, params = {}) => {
    return {
        type: 'SELECT_TAB',
        payload: { index, params }
    }
}

export const getFormById = (id) => {
    return async (dispatch, getState) => {
        const response = await seguroApi.get(`/form/get/` + id).catch((error) => dispatch(promptError(error)));
        if (getState().error.error === true) return;
        let form = response.data.form;
        form = form.split('\'').join('\"');
        form = JSON.parse(form);
        dispatch({ type: 'GET_FORM_BY_ID', payload: form });
    }
}

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
        payload: {}
    }
}