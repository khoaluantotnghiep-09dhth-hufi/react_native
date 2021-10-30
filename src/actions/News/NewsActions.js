import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchNews = (news) => {
    return {
        type: types.FETCH_NEWS,
        news,
    };
};

export const fetchNewsRequest = () => {
    return (dispatch) => {
        return callApi("news", "GET", null).then((response) => {
            dispatch(fetchNews(response.data));
        });
    };
};