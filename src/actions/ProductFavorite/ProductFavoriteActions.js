import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchProductFavorite = (productFavorite) => {
    return {
        type: types.FETCH_PRODUCT_FAVORITE,
        productFavorite,
    };
};



export const addProductFavorite  = (productFavorite) => {
    return {
        type: types.ADD_PRODUCT_FAVORITE,
        productFavorite
    };
};


export const removeProductFavorite  = (productFavorite) => {
    return {
        type: types.REMOVE_PRODUCT_FAVORITE,
        productFavorite
    };
};