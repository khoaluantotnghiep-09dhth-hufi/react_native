import * as types from "../../constants/ActionsType";

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
var productFavorite = (state = initialState, action) => {
  var { productFavorite } = action;
  var index = -1;
  switch (action.type) {
    //Lấy Tất cả Danh Sách SP Yêu Thích

    case types.FETCH_PRODUCT_FAVORITE:
    
      return [...state];

    case types.ADD_PRODUCT_FAVORITE:
      state.push({ productFavorite });
      return [...state];
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
