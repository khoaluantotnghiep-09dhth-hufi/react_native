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
        return callApi(`product-info-mobile/${id}`, "GET", null).then((response) => {
            dispatch(fetchProductInfo(response.data));
        });
    };
};

export const fetchProductInfoSizeColor = (productInfo) => {
    return {
        type: types.FETCH_SIZE_COLOR,
        productInfo,
    };
};

export const fetchProductInfoSizeColorRequest = (id) => {
    return (dispatch) => {
        return callApi(`product-info-color-size-mobile/${id}`, "GET", null).then((response) => {
            dispatch(fetchProductInfoSizeColor(response.data));
        });
    };
};