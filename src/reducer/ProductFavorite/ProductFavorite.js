import * as types from "../../constants/ActionsType";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid} from "react-native";

var initialState = [];
var findIndex = (array, product) => {
  var result = -1;
  array.forEach((array, index) => {
    if (array.id === product.id) {
      result = index;
    }
  });
  return result;
};
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("favorite", jsonValue);
  } catch (e) {
    console.error(e);
  }
};
var productFavorite = (state = initialState, action) => {
  var { productFavorite } = action;
  var index = -1;
  switch (action.type) {
    //Lấy Tất cả Danh Sách SP Yêu Thích

    case types.FETCH_PRODUCT_FAVORITE:
      return [...state];

    case types.ADD_PRODUCT_FAVORITE:
      index = findIndex(state, productFavorite);
      if (index !== -1) {
        ToastAndroid.show("Đã có sản phẩm trong danh sach", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Thêm Thành Công!", ToastAndroid.SHORT);
        storeData(state);
        return [...state,productFavorite];
      }
   
     
      
    case types.REMOVE_PRODUCT_FAVORITE:
      index = findIndex(state, productFavorite);
      if (index !== -1) {
        state.splice(index, 1);
      }

      return [...state];
    default:
      return state;
  }
};

export default productFavorite;
