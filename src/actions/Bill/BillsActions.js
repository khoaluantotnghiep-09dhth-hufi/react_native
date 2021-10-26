import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

// Khách Hàng Order sản phẩm

export const onAddBillCustomerResquest = (bills_customer) => {
  return (dispatch) => {
    return callApi("bill-customer", "POST", bills_customer).then(
      (response) => {
        console.log("Da tao bill: " +response.data);
      }
    );
  };
};

export const onAddBillInfoCustomerResquest = (bills_info_customer) => {
  return (dispatch) => {
    return callApi("bill-info-customer", "POST", bills_info_customer).then(
      (response) => {
          console.log("Da tao bill-info: " +response.data);
      }
    );
  };
};
