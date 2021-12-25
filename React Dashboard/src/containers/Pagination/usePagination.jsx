import { useMemo } from "react";

//Определение диапазона
const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};


export const usePagination = ({
	totalCount, //Общее количество данных, доступных из источника
	pageSize, //Максимальное количество данных, отображаемых на одной странице

}) => {
	const paginationRange = useMemo(() => {

		//Количество страниц, которое нам необходимо отрисовать на странице
		const totalPageCount = Math.ceil(totalCount / pageSize);

		return range(1, totalPageCount);

	}, [totalCount, pageSize]);

	return paginationRange;
};