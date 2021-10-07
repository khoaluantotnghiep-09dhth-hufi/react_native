import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchCategory = (category) => {
    return {
        type: types.FETCH_CATEGORY,
        category,
    };
};

export const fetchCategoryRequest = () => {
    return (dispatch) => {
        return callApi("categories", "GET", null).then((response) => {
            console.log("data nef",response);
            dispatch(fetchCategory(response.data));
        });
    };
};