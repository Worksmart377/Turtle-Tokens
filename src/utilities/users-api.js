import sendRequest from './send-requests';
const BASE_URL = '/api/users';

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
};
export function checkToken(credentials) {
    return sendRequest(`${BASE_URL}/check-token`, 'POST', credentials)
};


export function signUp(userData) {
return sendRequest(BASE_URL, 'POST', userData)

};

