import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
const myReducer = combineReducers({
    category,
    banner,
    product,
    productInfo,
});

export default myReducer;