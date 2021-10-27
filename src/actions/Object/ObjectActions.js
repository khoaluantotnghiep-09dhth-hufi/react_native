import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchObject = (object) => {
    return {
        type: types.FETCH_OBJECT,
        object,
    };
};

export const fetchObjectRequest = () => {
    return (dispatch) => {
        return callApi("objects", "GET", null).then((response) => {
            dispatch(fetchObject(response.data));
        });
    };
};