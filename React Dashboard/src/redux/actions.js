import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE,
	SET_PAGE_SIZE,
	GET_CARDS,
	UPDATE_LIKES
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

export const getCardsAction = (payload) => (dispatch) => {
	dispatch({
		type: GET_CARDS,
		payload
	});
};

export const updateLikes = (payload) => {
	return {
		type: UPDATE_LIKES,
		payload
	}
};