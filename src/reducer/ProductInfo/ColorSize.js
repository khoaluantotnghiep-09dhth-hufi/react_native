import * as types from "../../constants/ActionsType";

var initialState = [];

var productInfoSizeColor = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SIZE_COLOR:
            state = action.productInfoSizeColor;
            return [...state];
        case types.EDIT_SIZE_COLOR:
            return action.productInfoSizeColor;
        default:
            return state;
    }
};

export default productInfoSizeColor;
