import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE,
	SET_PAGE_SIZE
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

export const setPageSizeAction = (payload) => {
	return {
		type: SET_PAGE_SIZE,
		payload
	};
};