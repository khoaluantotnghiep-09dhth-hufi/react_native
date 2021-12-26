import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchProduct = (product) => {
    return {
        type: types.FETCH_PRODUCT,
        product,
    };
};

export const fetchProductRequest = () => {
    return (dispatch) => {
        return callApi("products-adminMobile", "GET", null).then((response) => {
            dispatch(fetchProduct(response.data));
        });
    };
};

export const fetchProductSearch = (product) => {
    return {
        type: types.FETCH_PRODUCT_SEARCH,
        product,
    };
};

export const fetchProductSearchRequest = () => {
    return (dispatch) => {
        return callApi('products-adminMobileSearch', "GET", null).then((response) => {
            dispatch(fetchProductSearch(response.data));
        });
    };
};