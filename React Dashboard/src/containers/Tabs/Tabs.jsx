import React, { useState } from "react";
import classnames from "classnames";
import { TabsContent } from "../../components/TabsContent/TabsContent";
import "../../components/TabsContent/TabsContent.scss";

export const Tabs = () => {

	const tabInfo = [
		{ title: 'Active tab', content: 'fa-border-all' },
		{ title: 'Inactive tab', content: 'fa-chart-pie' },
		{ title: 'Inactive tab', content: 'fa-briefcase' },
	];

	const [activeTab, setActiveTab] = useState(null);

	const openTab = (ind) => {

		setActiveTab(ind);
	};

	return (
		<div className="tabs_wrapper">
			<div className="container">
				<div className="tabs">
					{tabInfo.map((item, ind) => {
						return (
							<div
								className={classnames("tabs_item",
									`${ind === 0 && activeTab === null ?
										'active' :
										ind === activeTab ? 'active' : ''}`)}
								key={ind}
								onClick={() => openTab(ind)}
							>
								<i className={classnames("fas", `${item.content}`)}></i>
								<span>{activeTab === null ?
									item.title :
									ind === activeTab ? 'Active tab' : 'Inactive tab'}
								</span>
							</div>
						);
					})}
				</div>
				<TabsContent tab={activeTab} />
			</div>
		</div >
	);
};