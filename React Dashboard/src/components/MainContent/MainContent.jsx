import React from "react";
import { Table } from "../../containers/Table/Table";
import "../../containers/Table/Table.scss";

export const MainContent = () => {
	return (
		<div className="content_wrap">
			<div className="container">
				<div className="content">
					<div className="content_row3">
						<Table />
					</div>
				</div>
			</div>
		</div>
	);
};