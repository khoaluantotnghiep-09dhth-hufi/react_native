import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
import productByCategory from './ProductByCategory/ProductByCategory';
const myReducer = combineReducers({
    category,
    banner,
    product,
    productInfo,
    productByCategory,
});

export default myReducer;