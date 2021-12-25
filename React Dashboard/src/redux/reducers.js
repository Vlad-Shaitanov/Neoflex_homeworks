import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE
} from "./types";

const initialState = {
	usersInfo: [],
	currentPage: 1,
	pageSize: 10
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_INFO:
			return { ...state, usersInfo: [...state.usersInfo, ...action.payload] };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };
		default:
			return state;
	}
};