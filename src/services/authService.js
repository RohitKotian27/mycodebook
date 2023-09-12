export async function register(authDetail) {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(authDetail)
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions).then(res => res.json());
    if (response.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(response.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(response.user.id));
    }
    return response;
};

export async function login(authDetail) {
    const requestOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(authDetail)
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions).then(res => res.json());
    if (response.accessToken) {
        sessionStorage.setItem('token', JSON.stringify(response.accessToken));
        sessionStorage.setItem('cbid', JSON.stringify(response.user.id));
    }
    return response;
};

