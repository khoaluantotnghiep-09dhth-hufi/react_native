import * as types from "../../constants/ActionsType";

var initialState = [];

var productByCategory = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_BY_CATEGORY:
            state = action.productByCategory;
            return [...state];
        case types.EDIT_PRODUCT_BY_CATEGORY:
            return action.productByCategory;
        default:
            return state;
    }
};

export default productByCategory;
