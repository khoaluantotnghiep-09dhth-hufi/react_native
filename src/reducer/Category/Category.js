import * as types from "../../constants/ActionsType";

var initialState = [];

var category = (state = initialState, action) => {
    switch (action.type) {
        //Lấy Tất cả Danh Sách Danh Mục
        case types.FETCH_CATEGORY:
            state = action.category;
            return [...state];
        case types.EDIT_CATEGORY:
            return action.category;
        default:
            return state;
    }
};

export default category;
