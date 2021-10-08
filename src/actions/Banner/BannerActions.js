import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchBanner = (banner) => {
    return {
        type: types.FETCH_BANNER,
        banner,
    };
};

export const fetchBannerRequest = () => {
    return (dispatch) => {
        return callApi("banners", "GET", null).then((response) => {
            dispatch(fetchBanner(response.data));
        });
    };
};