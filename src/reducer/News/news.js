import * as types from "../../constants/ActionsType";

var initialState = [];

var news = (state = initialState, action) => {
    switch (action.type) {
        //Lấy Tất cả Danh Sách Tin Tuc
        case types.FETCH_NEWS:
            state = action.news;
            return [...state];
      
        default:
            return state;
    }
};

export default news;
