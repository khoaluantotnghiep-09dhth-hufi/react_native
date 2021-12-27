import * as types from "../../constants/ActionsType";

var initialState = [];

var waitBuy = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BILL_WAIT:
            state = action.waitBuy;
            return [...state];
        default:
            return state;
    }
};

export default waitBuy;
