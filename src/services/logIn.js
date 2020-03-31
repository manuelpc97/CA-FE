import server from '../apis/ca-be';

const login = ({ username, password }) => 
    server.post('/user/logIn', { username, password })
    .then(({ data }) => Promise.resolve(data))
    .catch(error => Promise.reject('Erro while trying to login', error.response));

export default login;