function getRequiredTokens() {
    const cbid = JSON.parse(sessionStorage.getItem('cbid'));
    const token = JSON.parse(sessionStorage.getItem('token'));
    return { token, cbid };
}

export async function getUserData() {
    const { token, cbid } = getRequiredTokens();
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, requestOptions);
    if (!response.ok) {
        console.log('Failed to get the user details');
        throw { message: response.statusText, statusCode: response.status }; //eslint-disable-line
    }
    const requiredData = await response.json();
    return requiredData;
}

export async function createUserOrder(cartList, total, user) {
    const { token } = getRequiredTokens();
    const order = {
        products: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            cbid: user.id
        }
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order)
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, requestOptions);
    const data = await response.json();
    return data;
}

export async function getUserOrder() {
    const { token, cbid } = getRequiredTokens();
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.cbid=${cbid}`, requestOptions);
    if (!response.ok) {
        console.log('Failed to get the user order details');
        throw { message: response.statusText, statusCode: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}
