import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
import productFavorite from './ProductFavorite/ProductFavorite';
import productByCategory from './ProductByCategory/ProductByCategory';
import productInfoSizeColor from './ProductInfo/ColorSize';
import cart from './Cart/Cart';
import customer from './Customer/customer'
import users from "./User/users";
const myReducer = combineReducers({
    category,
    banner,
    product,
    productFavorite,
    productInfo,
    productByCategory,
    productInfoSizeColor,
    cart,
    customer,
    users,
});

export default myReducer;