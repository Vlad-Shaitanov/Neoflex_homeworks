import React from "react";

export const TabsContent = (props) => {

	const { tab } = props;
	const content = [
		{ info: "Tab One" },
		{ info: "Tab Two" },
		{ info: "Tab Three" }
	];

	return (
		<div className="tabs_content">
			<p>{tab === null ?
				content[0].info
				:
				content[tab].info
			}</p>
		</div>
	);
};