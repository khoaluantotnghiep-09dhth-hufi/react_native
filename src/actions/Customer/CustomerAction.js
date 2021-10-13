import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

//Lấy tất cả danh sách Khách hàng
export const fetchUser = (user) => {
    return {
      type: types.FETCH_USER,
      user,
    };
  };
  export const onDeleteUser = (id) => {
    return {
      type: types.DELETE_USER,
      id,
    };
  };
  export const fetchUserRequest = () => {
    return (dispatch) => {
      return callApi("customers", "GET", null).then((response) => {
        dispatch(fetchUser(response.data));
      });
    };
  };
  export const onDeleteUserResquest = (id) => {
    return (dispatch) => {
      return callApi(`customers/${id}`, "DELETE", null).then((response) => {
        toast.success("Xóa thành công !");
        dispatch(onDeleteUserResquest(id));
      });
    };
  };