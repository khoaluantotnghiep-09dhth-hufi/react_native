import * as types from "../../constants/ActionsType";


var initialState = [
    {
        product: {
            id: 1,
            name: 'acb',
            price: 140000
        },
        quantity: 5
    }
];
var findIndex = (cart, product) => {
    var result = -1;
    cart.forEach((cart, index) => {
        if (cart.id === product.id) {
            result = index;
        }
    });
    return result;
};

var findProductCart = (cart, product) => {
    var index = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id && cart[i].product.quantityAllProduct === product.quantityAllProduct && cart[i].product.sizeProduct === product.sizeProduct && cart[i].product.isChooseColor === product.isChooseColor) {
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
            sessionStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        //Xóa sản phẩm vào giỏ hàng
        case types.REMOVE_TO_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            sessionStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        //Cập nhật giỏ hàng
        case types.UPDATE_QUANTITY_CART:
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].quantity = parseInt(quantity);
            }
            sessionStorage.setItem("cart", JSON.stringify(state));
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
