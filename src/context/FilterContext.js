import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const filterInitialState = {
    productList: [],
    bestSellerOnly: false,
    inStockOnly: false,
    sortByPrice: null,
    sortByRating: null
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(data) {
        dispatch({
            type: 'PRODUCT_LIST',
            payload: {
                products: data
            }
        })
    };

    function sortByBestSellerOnly(products) {
        return state.bestSellerOnly ? products.filter((product) => product.best_seller) : products;
    }

    function sortByInStockOnly(products) {
        return state.inStockOnly ? products.filter((product) => product.in_stock) : products;
    }

    function sortProductsByRating(products) {
        if (state.sortByRating === "4STARANDABOVE") {
            return products.filter((product) => product.rating >= 4);
        } else if (state.sortByRating === "3STARANDABOVE") {
            return products.filter((product) => product.rating >= 3);
        } else if (state.sortByRating === "2STARANDABOVE") {
            return products.filter((product) => product.rating >= 2);
        } else if (state.sortByRating === "1STARANDABOVE") {
            return products.filter((product) => product.rating >= 1);
        } else {
            return products;
        }
    }

    function sortProductsByPrice(products) {
        if (state.sortByPrice === 'lowtohigh') {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (state.sortByPrice === 'hightolow') {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        } else {
            return products;
        }
    }

    const filteredProductList = sortProductsByPrice(sortProductsByRating(sortByInStockOnly(sortByBestSellerOnly(state.productList))));

    const value = {
        state,
        dispatch,
        productList: filteredProductList,
        initialProductList
    };
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);