import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPageAction, setPageSizeAction } from "../../redux/actions";


export const Select = () => {
	const dispatch = useDispatch();

	const updateTable = (e) => {
		const { value } = e.target;

		dispatch(setPageSizeAction(+value));
		dispatch(setCurrentPageAction(1));
	};

	return (
		<div className="select_item">
			<select name="select" id="select" onChange={updateTable}>
				<option value="10">10</option>
				<option value="9">9</option>
				<option value="8">8</option>
				<option value="7">7</option>
				<option value="6">6</option>
				<option value="5">5</option>
				<option value="4">4</option>
				<option value="3">3</option>
				<option value="2">2</option>
				<option value="1">1</option>
			</select>
		</div>
	);
};