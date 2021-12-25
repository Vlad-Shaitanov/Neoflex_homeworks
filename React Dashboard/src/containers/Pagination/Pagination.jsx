import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { usePagination } from "./usePagination";
import { setCurrentPageAction } from "../../redux/actions";

export const Pagination = (props) => {
	const dispatch = useDispatch();

	const {
		totalCount,
		currentPage,
		pageSize,
	} = props;

	//Число страниц для пагинации
	const paginationRange = usePagination({
		totalCount,
		pageSize,
	});

	//Если у нас меньше двух страниц, то компонент пагинации не рисуем
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {

		dispatch(setCurrentPageAction(currentPage + 1));
	};

	const onPrevious = () => {

		dispatch(setCurrentPageAction(currentPage - 1));
	};

	const onUpdatePage = (pageNumber) => {

		dispatch(setCurrentPageAction(pageNumber));
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<>
			{/*Левая стрелка*/}
			{currentPage === 1 ? (
				<div
					className="arrow_left disabled"
					onClick={onPrevious}
				>
					&lt;
				</div>
			) : (
				<div
					className="arrow_left"
					key={uuidv4()}
					onClick={onPrevious}
				>
					&lt;
				</div>
			)}
			<ul>
				{paginationRange.map((pageNumber) => {

					// Отрисовываем элемент страницы
					return pageNumber === currentPage ? (
						<li
							className="pagination_selected"
							key={uuidv4()}
							onClick={() => onUpdatePage(pageNumber)}
						>
							<div >
								{pageNumber}
							</div>
						</li>
					) : (
						<li
							key={uuidv4()}
							onClick={() => onUpdatePage(pageNumber)}
						>
							{pageNumber}
						</li>
					);
				})}
			</ul>
			{/*Правая стрелка*/}
			{currentPage === lastPage ? (
				<div

					className="arrow_right disabled"
					onClick={onNext}
				>
					&gt;
				</div>
			) : (
				<div
					className="arrow_right"
					onClick={onNext}
				>
					&gt;
				</div>
			)}
		</>
	);
};

