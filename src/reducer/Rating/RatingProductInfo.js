import * as types from "../../constants/ActionsType";

var initialState = [];

var ratingProduct = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_RATING:
            state = action.ratingProduct;
            return [...state];
        case types.EDIT_RATING:
            return action.ratingProduct;
        default:
            return state;
    }
};

export default ratingProduct;
