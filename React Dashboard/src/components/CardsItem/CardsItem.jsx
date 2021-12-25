import React from "react";

export const CardsItem = (props) => {
	const { name, body, id } = props;
	return (
		<div className="card_item">
			<img src="https://ucare.timepad.ru/599fab4c-51ee-46d6-bafa-0456510ab487/poster_event_1501201.jpg"
				alt={"img" + id} />
			<div className="card_body">
				<p className="card_body_title">${name}</p>

				<div className="card_body_date">17.11.21</div>
				<div className="card_body_img">
					<svg className="like icon_unliked" width="15" height="15" viewBox="0 0 15 15"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.544 0.979025C11.9386 -0.513489 9.55096 -0.245028 8.07735 1.41368L7.50022 2.06246L6.92308 1.41368C5.4524 -0.245028 3.06182 -0.513489 1.45639 0.979025C-0.383422 2.69206 -0.4801 5.76658 1.16635 7.62343L6.83519 14.009C7.20139 14.4212 7.79611 14.4212 8.16231 14.009L13.8311 7.62343C15.4805 5.76658 15.3839 2.69206 13.544 0.979025Z" />
					</svg>
				</div>
				<p className="card_body_text">${body}
				</p>
			</div>
			<button type="button" className="card_item_button">Read More</button>
		</div>
	);
};