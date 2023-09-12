export const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'PRODUCT_LIST':
            return { ...state, productList: payload.products };
        case 'BEST_SELLER_ONLY':
            return { ...state, bestSellerOnly: payload.bestSeller };
        case 'IN_STOCK_ONLY':
            return { ...state, inStockOnly: payload.inStock };
        case 'SORT_BY_PRICE':
            return { ...state, sortByPrice: payload.price };
        case 'SORT_BY_RATING':
            return { ...state, sortByRating: payload.rating };
        case 'CLEAR_FILTER':
            return {
                ...state,
                bestSellerOnly: false,
                inStockOnly: false,
                sortByPrice: null,
                sortByRating: null
            };
        default:
            throw new Error('No cases found');
    }
}