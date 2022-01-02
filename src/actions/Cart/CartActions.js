import * as types from "../../constants/ActionsType";

export const listAll = () => {
    return {
        type: types.LIST_ALL_CART,
    };
};

//Thêm sản phẩm vào giỏ hàng
export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        
    };
   
};
//Xóa sản phẩm trong giỏ hàng
export const removeToCart = (product) => {
    return {
        type: types.REMOVE_TO_CART,
        product,
    };
};
//Cập nhật giỏ hàng
export const updateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY_CART,
        product,
        quantity,
    };
};
//Rest Cart
export const onRestCart = (product) => {
    return {
        type: types.RESET_CART,
        product,
    };
};