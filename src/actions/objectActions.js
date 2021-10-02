import * as types from "../actionsType/type";
import callApi from "../actionsType/callAPI";
export const fetchObject = (object_menu) => {
    return {
        type: types.FETCH_OBJECT,
        object_menu,
    };
};

export const fetchObjectResquest = () => {
    return (dispatch) => {
        return callApi("objects", "GET", null).then((response) => {
            if (response === undefined) {
                toast.error("Vui lòng thử lại !");
            }
            else {
                dispatch(fetchProduct(response.data));
            }
        });
    };
};

