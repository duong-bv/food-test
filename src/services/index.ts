export function setToken(token?: string) {
    token && localStorage.setItem('apiToken', token);
}

export function getToken() {
    return localStorage.getItem('apiToken');
}

export function clearToken() {
    localStorage.removeItem('apiToken');
}

export function getInfoUser() {
    const data = localStorage.getItem('user');
    return data && JSON.parse(data);
}

export function setUserInfo(user) {
    user && localStorage.setItem('user', JSON.stringify(user));
}