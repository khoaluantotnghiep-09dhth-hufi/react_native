import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
import productByCategory from './ProductByCategory/ProductByCategory';
import productInfoSizeColor from './ProductInfo/ColorSize';
import cart from './Cart/Cart';
const myReducer = combineReducers({
    category,
    banner,
    product,
    productInfo,
    productByCategory,
    productInfoSizeColor,
    cart,
});

export default myReducer;