import * as types from "../../constants/ActionsType";
import callApi from "../../constants/CallAPI";

export const fetchSector = (sector) => {
    return {
        type: types.FETCH_SECTOR,
        sector,
    };
};

export const fetchSectorRequest = () => {
    return (dispatch) => {
        return callApi("sectors", "GET", null).then((response) => {
            dispatch(fetchSector(response.data));
        });
    };
};