import {
	GET_USERS_INFO,
	SET_CURRENT_PAGE,
	SET_PAGE_SIZE,
	GET_CARDS,
	UPDATE_LIKES,
	SET_ACTIVE_TAB
} from "./types";

const initialState = {
	usersInfo: [],//Список пользователей
	currentPage: 1,//Текущая страница
	pageSize: 10,//Количество строк к отображению
	cards: [],//Контент для карточек
	likes: [],//Лайкнутые посты
	activeTab: null,//Активный таб
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

		case UPDATE_LIKES:
			const like = action.payload;
			const itemIndex = state.likes.findIndex((item) => item === like);

			if (itemIndex === -1) {

				return { ...state, likes: [...state.likes, like] };
			} else {

				return {
					...state,
					likes: [...state.likes.slice(0, itemIndex), ...state.likes.slice(itemIndex + 1)]
				};
			}

		case SET_ACTIVE_TAB:
			return { ...state, activeTab: action.payload };
		default:
			return state;
	}
};