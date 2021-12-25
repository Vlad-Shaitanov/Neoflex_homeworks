import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../redux/actions";
import { TableItem } from "../../components/TableItem/TableItem";
import "../../components/TableItem/TableItem.scss";
import { Pagination } from "../Pagination/Pagination";
import "../Pagination/Pagination.scss";
import { Select } from "../../components/Select/Select";
import "../../components/Select/Select.scss";

export const Table = () => {
	const dispatch = useDispatch();
	const usersData = useSelector((state) => state.usersInfo);//Все заявки
	const currentPage = useSelector((state) => state.currentPage);//Текущая страница

	// let pageSize = 10;//Сколько записей на странице
	let pageSize = useSelector((state) => state.pageSize);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize;
		const lastPageIndex = firstPageIndex + pageSize;
		return usersData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, usersData, pageSize]);



	const getCharacters = async () => {
		try {

			const users = await fetch("https://randomuser.me/api/?results=25");
			const data = await users.json();

			dispatch(getUsersAction(data.results));

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCharacters();
	}, []);



	return (
		<div className="table_wrap">
			<div className="table_grid">

				<div className="row1 head">
					<div className="col1">Name</div>
					<div className="col2">Location</div>
					<div className="col3">Phone</div>
				</div>
				{currentTableData.map((item, ind) => {
					return <TableItem item={item} key={ind} />
				})}
			</div>
			<div className="content_row2">
				<div className="pagination">
					<div className="pagination_list">
						<Pagination
							currentPage={currentPage}
							pageSize={pageSize}
							totalCount={usersData.length}
						/>
					</div>
				</div>
				<Select />
			</div>
		</div>
	);
};