import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

// Khách Hàng Order sản phẩm

export const onAddBillCustomerResquest = (bills_customer) => {
  return (dispatch) => {
    return callApi("bill-customer", "POST", bills_customer).then(
      (response) => {
      }
    );
  };
};

export const onAddBillInfoCustomerResquest = (bills_info_customer) => {
  return (dispatch) => {
    ("data bill info responsive: ", bills_info_customer);
    return callApi("bill-info-customer-mobile", "POST", bills_info_customer).then(
      (response) => {
        ("data bill info responsive: ", response);
      }
    );
  };
};
//Lấy tất cả danh sách Bills_Customer theo id_customer
export const fetchBillsCustomer = (bill_ordered) => {
  return {
    type: types.FETCH_BILL_ORDERED,
    bill_ordered,
  };
};

export const fetchBillsCustomerResquest = (id_customer) => {
  return (dispatch) => {
    return callApi(`bills-wait/${id_customer}`, "GET", null).then((response) => {
      dispatch(fetchBillsCustomer(response.data));
    });
  };
};

export const fetchBillsWaitCustomer = (bill_ordered) => {
  return {
    type: types.FETCH_BILL_WAIT,
    bill_ordered,
  };
};

export const fetchBillsWaitCustomerResquest = (id_customer) => {
  return (dispatch) => {
    return callApi('bills-wait', "GET", id_customer).then((response) => {
      dispatch(fetchBillsWaitCustomer(response.data));
    });
  };
};