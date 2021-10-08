import * as types from "../../constants/ActionsType";

var initialState = [];

var productInfo = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_INFO:
            state = action.productInfo;
            return [...state];
        case types.EDIT_PRODUCT_INFO:
            return action.productInfo;
        default:
            return state;
    }
};

export default productInfo;
