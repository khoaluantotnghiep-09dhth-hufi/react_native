import * as types from "../../constants/ActionsType";

var initialState = [];

var object = (state = initialState, action) => {
    switch (action.type) {
        //Lấy Tất cả Danh Sách Danh Mục
        case types.FETCH_OBJECT:
            state = action.object;
            return [...state];
        
        default:
            return state;
    }
};

export default object;
