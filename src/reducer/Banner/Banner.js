import * as types from "../../constants/ActionsType";

var initialState = [];

var banner = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BANNER:
            state = action.banner;
            return [...state];
        case types.EDIT_BANNER:
            return action.banner;
        default:
            return state;
    }
};
export default banner;
