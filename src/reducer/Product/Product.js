import * as types from "../../constants/ActionsType";

var initialState = [];

var product = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT:
            state = action.product;
            return [...state];
        case types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
};

export default product;
