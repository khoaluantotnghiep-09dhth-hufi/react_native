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
        return callApi("products", "GET", null).then((response) => {
            dispatch(fetchProduct(response.data));
        });
    };
};