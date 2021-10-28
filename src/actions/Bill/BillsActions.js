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
  
  for(let i = 0; i < bills_info_customer.length; i++){

    console.log("Bill_info o Action: "+'\n\n' + bills_info_customer[i].id+'\n'+ bills_info_customer[i].id_bill+'\n'+ bills_info_customer[i].id_product_info+'\n'+ bills_info_customer[i].into_money+'\n'+ bills_info_customer[i].quantity+'\n');
  }
  return (dispatch) => {
    return callApi("bill-info-customer", "POST", bills_info_customer).then(
      (response) => {
          console.log("Da tao bill-info: " +response.data);
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
    return callApi(`bills/${id_customer}`, "GET", null).then((response) => {
      dispatch(fetchBillsCustomer(response.data));
    });
  };
};