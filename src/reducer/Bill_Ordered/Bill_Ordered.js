import * as types from "../../constants/ActionsType";

var initialState = [];

var bill_ordered = (state = initialState, action) => {
    switch (action.type) {
        //Lấy Tất cả Danh Sách Danh Mục
        case types.FETCH_BILL_ORDERED:
            state = action.bill_ordered;
            return [...state];
        
        default:
            return state;
    }
};

export default bill_ordered;
