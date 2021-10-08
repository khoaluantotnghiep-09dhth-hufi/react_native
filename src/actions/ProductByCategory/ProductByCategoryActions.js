import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchProductByCategory = (productByCategory) => {
    return {
        type: types.FETCH_PRODUCT_BY_CATEGORY,
        productByCategory,
    };
};

export const fetchProductByCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi(`products-mobile/${id}`, "GET", null).then((response) => {
            dispatch(fetchProductByCategory(response.data));
        });
    };
};