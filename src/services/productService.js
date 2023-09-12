export async function getProductList(searchParameter) {
    const data = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchParameter || ''}`);
    if (!data.ok) {
        console.log('Failed to get the product list');
        throw { message: data.statusText, statusCode: data.status }; //eslint-disable-line
    }
    const response = await data.json();
    return response;
}

export async function getProductDetail(id) {
    const data = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if (!data.ok) {
        console.log('Failed to get the product details');
        throw { message: data.statusText, statusCode: data.status }; //eslint-disable-line
    }
    const response = await data.json();
    return response;
}

export async function getFeaturedProducts() {
    const data = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if (!data.ok) {
        console.log('Failed to get the featured products');
        throw { message: data.statusText, statusCode: data.status }; //eslint-disable-line
    }
    const response = await data.json();
    return response;
}