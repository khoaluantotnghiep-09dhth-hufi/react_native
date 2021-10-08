import { combineReducers } from "redux";
import category from './Category/Category';
import banner from './Banner/Banner';
import product from './Product/Product';
const myReducer = combineReducers({
    category,
    banner,
    product,
});

export default myReducer;