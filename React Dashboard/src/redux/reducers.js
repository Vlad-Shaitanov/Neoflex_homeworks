import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE,
	SET_PAGE_SIZE,
	GET_CARDS
} from "./types";

const initialState = {
	usersInfo: [],
	currentPage: 1,
	pageSize: 10,
	cards: []
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_INFO:
			return { ...state, usersInfo: [...state.usersInfo, ...action.payload] };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };

		case SET_PAGE_SIZE:
			return { ...state, pageSize: action.payload };

		case GET_CARDS:
			return { ...state, cards: [...state.cards, ...action.payload] };

		default:
			return state;
	}
};