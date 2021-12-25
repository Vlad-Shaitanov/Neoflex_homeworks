import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE
} from "./types";

export const getUsersAction = (payload) => (dispatch) => {
	dispatch({
		type: GET_USERS_INFO,
		payload
	});
};

export const setCurrentPageAction = (payload) => {
	return {
		type: SET_CURRENT_PAGE,
		payload
	}
};