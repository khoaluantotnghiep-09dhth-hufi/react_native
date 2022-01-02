import * as types from "../../constants/ActionsType";
import AsyncStorage from '@react-native-async-storage/async-storage';

var initialState = [];
var findIndex = (cart, product) => {
    var result = -1;
    cart.forEach((cart, index) => {
        if (cart.id === product.id) {
            result = index;
        }
    });
    return result;
};
// && cart[i].product.quantity === product.quantity
var findProductCart = (cart, product) => {
    var index = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id && cart[i].product.idSize === product.idSize && cart[i].product.idColor === product.idColor) {
            index = i;
            break;
        }
    }
    return index;
};
var resetCart = (product) => {
    while (product.length) {
        product.pop();
    }
};
const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('cart', jsonValue)
    } catch (e) {
        console.error(e)
    }
}
var cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var id = "";
    var index = -1;
    switch (action.type) {
        //Lấy tất cả danh sách giỏ hàng
        case types.LIST_ALL_CART:
            return [...state];
        //Thêm sản phẩm vào giỏ hàng
        case types.ADD_TO_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].quantity += parseInt(quantity);
            } else {
                state.push({
                    product,
                    quantity,
                });
            }
            storeData(state);
            return [...state];
        //Xóa sản phẩm vào giỏ hàng
        case types.REMOVE_TO_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            AsyncStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        //Cập nhật giỏ hàng
        case types.UPDATE_QUANTITY_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].quantity = parseInt(quantity);
            }
            AsyncStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        //Reset giỏ hàng
        case types.RESET_CART:
            resetCart(state);
            return [...state];
        default:
            return [...state];
    }
};

export default cart;
