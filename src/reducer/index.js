import { combineReducers } from "redux";
import category from './Category/Category';
import object from './Object/Object';
import sector from './Sector/Sector';
import banner from './Banner/Banner';
import product from './Product/Product';
import productInfo from './ProductInfo/ProductInfo';
import productFavorite from './ProductFavorite/ProductFavorite';
import productByCategory from './ProductByCategory/ProductByCategory';
import productInfoSizeColor from './ProductInfo/ColorSize';
import bill_ordered from './Bill_Ordered/Bill_Ordered';
import cart from './Cart/Cart';
import customer from './Customer/customer'
import users from "./User/users";
import news from './News/news';
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
    object,
    sector,
    bill_ordered,
    news,
});

export default myReducer;