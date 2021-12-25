import React from "react";

export const TableItem = (props) => {
	const { item } = props;
	return (
		<div className="row1 row_body">
			<div className="col1">{item.name.first} {item.name.last}</div>
			<div className="col2">{item.location.city}</div>
			<div className="col3">{item.phone}</div>
		</div>
	);
};