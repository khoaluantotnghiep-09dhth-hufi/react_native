import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
import productByCategory from './ProductByCategory/ProductByCategory';
import productInfoSizeColor from './ProductInfo/ColorSize';
const myReducer = combineReducers({
    category,
    banner,
    product,
    productInfo,
    productByCategory,
    productInfoSizeColor,
});

export default myReducer;