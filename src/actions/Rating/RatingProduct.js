import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchRating = (rating) => {
    return {
        type: types.FETCH_RATING,
        rating,
    };
};

export const fetchRatingRequest = () => {
    return (dispatch) => {
        return callApi("rating-info", "GET", null).then((response) => {
            dispatch(fetchRating(response.data));
            console.log(response.data);
        });
    };
};

export const fetchProductInfoSizeColor = (productInfoSizeColor) => {
    return {
        type: types.FETCH_SIZE_COLOR,
        productInfoSizeColor,
    };
};

export const fetchProductInfoSizeColorRequest = (id) => {
    return (dispatch) => {
        return callApi(`product-info-color-size-mobile/${id}`, "GET", null).then((response) => {
            dispatch(fetchProductInfoSizeColor(response.data));
        });
    };
};