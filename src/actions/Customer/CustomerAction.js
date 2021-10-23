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
        console.log("Lay data Sercver: "+response.data);
        dispatch(fetchUser(JSON.parse(JSON.stringify(response.data))));
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

  // lấy ds khách hàng
export const fetchCustomer = (customer) => {
  return {
    type: types.FETCH_CUSTOMER,
    customer,
  };
};

export const fetchCustomerResquest = () => {
  return (dispatch) => {
    return callApi("customers", "GET", null).then((response) => {
      dispatch(fetchCustomer(response.data));
    });
  };
};

export const fetchCountCustomer = (customer) => {
  return {
    type: types.COUNT_CUSTOMER,
    customer,
  };
};

export const fetchCountCustomerResquest = () => {
  return (dispatch) => {
    return callApi("customer-count", "GET", null).then((response) => {
      dispatch(fetchCountCustomer(response.data));
    });
  };
};

//thêm khách hàng
export const onAddCustomer = (customer) => {
  return {
    type: types.ADD_CUSTOMER,
    customer,
  };
};
export const onAddCustomerResquest = (customer) => {
  return (dispatch) => {
    return callApi("customers", "POST", customer).then((response) => {
      if (response === undefined) {
        toast.error("Thêm thất bại, vui lòng thử lại !");
      } else {
        toast.success("Thêm thành công !");
        dispatch(onAddCustomer(response.data));
      }
    });
  };
};

//thêm khách hàng client
export const onAddCustomerClient = (customer) => {
  return {
    type: types.ADD_CUSTOMER_CLIENT,
    customer,
  };
};
export const onAddCustomerClientResquest = (customer) => {
  return (dispatch) => {
    return callApi("customers_client", "POST", customer).then((response) => {
      if (response === undefined) {
        toast.error("Thêm thất bại, vui lòng thử lại !");
      } else {
        toast.success("Thêm thành công !");
        dispatch(onAddCustomerClient(response.data));
      }
    });
  };
};

//cập nhập khách hàng
export const onUpdateCustomers = (customer) => {
  return {
    type: types.UPDATE_CUSTOMER,
    customer,
  };
};
export const onUpdateCustomersResquest = (customer) => {
  return (dispatch) => {
    return callApi(`customers/${customer.id}`, "PUT", customer).then(
      (response) => {
        if (response === undefined) {
          toast.error("Sửa thất bại, vui lòng thử lại !");
        } else {
          toast.success("Sửa thành công !");
          dispatch(onUpdateCustomers(response.data));
        }
      }
    );
  };
};

//cập nhập khách hàng client
export const onUpdateCustomersClient = (customer) => {
  return {
    type: types.UPDATE_CUSTOMER_CLIENT,
    customer,
  };
};
export const onUpdateCustomersClientResquest = (customer) => {
  return (dispatch) => {
    return callApi(`customers_client/${customer.id}`, "PUT", customer).then(
      (response) => {
        if (response === undefined) {
          toast.error("Sửa thất bại, vui lòng thử lại !");
        } else {
          toast.success("Sửa thành công !");
          dispatch(onUpdateCustomersClient(response.data));
        }
      }
    );
  };
};

//sửa tt khách hàng
export const onGetCustomer = (customer) => {
  return {
    type: types.EDIT_CUSTOMER,
    customer,
  };
};
export const onEditCustomerResquest = (id) => {
  return (dispatch) => {
    return callApi(`customers/${id}`, "GET", null).then((response) => {
      if (response === undefined) {
        toast.error("Vui lòng thử lại !");
      } else {
        dispatch(onGetCustomer(response.data));
      }
    });
  };
};

//Xoá khách hàng
export const onDeleteCustomer = (id) => {
  return {
    type: types.DELETE_CUSTOMER,
    id,
  };
};

export const onDeleteCustomerResquest = (id) => {
  return (dispatch) => {
    return callApi(`customers/${id}`, "DELETE", null).then((response) => {
      toast.success("Xóa thành công !");
      dispatch(onDeleteCustomer(id));
    });
  };
};