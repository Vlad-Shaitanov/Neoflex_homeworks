import React from "react";
import classnames from "classnames";

export const Tabs = () => {

	const tabInfo = [
		{ title: 'Active tab', content: 'fa-border-all' },
		{ title: 'Inactive tab', content: 'fa-chart-pie' },
		{ title: 'Inactive tab', content: 'fa-briefcase' },
	];

	return (
		<div className="tabs_wrapper">
			<div className="container">
				<div className="tabs">
					<div className="tabs_item active">
						<i className={classnames("fas", `${tabInfo[0].content}`)}></i>
						<span>{tabInfo[0].title}</span>
					</div>
					<div className="tabs_item">
						<i className={classnames("fas", `${tabInfo[1].content}`)}></i>
						<span>{tabInfo[1].title}</span>
					</div>
					<div className="tabs_item">
						<i className={classnames("fas", `${tabInfo[2].content}`)}></i>
						<span>{tabInfo[2].title}</span>
					</div>
				</div>
			</div>
		</div >
	);
};