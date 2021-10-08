import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchProductInfo = (productInfo) => {
    return {
        type: types.FETCH_PRODUCT_INFO,
        productInfo,
    };
};

export const fetchProductInfoRequest = (id) => {
    return (dispatch) => {
        return callApi(`product-info/${id}`, "GET", null).then((response) => {
            dispatch(fetchProductInfo(response.data));
        });
    };
};