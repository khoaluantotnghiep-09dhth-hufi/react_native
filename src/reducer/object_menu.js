import * as types from "../actionsType/type";

var initialState = [];

var findIndex = (object_menu, id) => {
    var result = -1;
    object_menu.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}
var object_menu = (state = initialState, action) => {
    var index = -1;
    var { id, object_menu } = action;
    switch (action.type) {
        //Lấy Danh Sách 
        case types.FETCH_OBJECT:
            state = object_menu;
            return [...state];

        default:
            return state;
    }
};

export default object_menu;
