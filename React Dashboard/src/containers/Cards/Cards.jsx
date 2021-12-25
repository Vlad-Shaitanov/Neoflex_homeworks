import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { getCardsAction } from "../../redux/actions";
import { CardsItem } from "../../components/CardsItem/CardsItem";
import "../../components/CardsItem/CardsItem.scss";


export const Cards = () => {
	const dispatch = useDispatch();
	const cardsInfo = useSelector((state) => state.cards);

	const getCards = async () => {
		const data = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
		const cards = await data.json();

		dispatch(getCardsAction(cards));
	};

	useEffect(() => {
		getCards();
	}, []);

	return (
		<div className="cards_wrap">
			<div className="cards">
				{cardsInfo.map((card) => {
					return <CardsItem
						name={card.name}
						body={card.body}
						id={card.id}
						key={uuidv4()}
					/>
				})}
			</div>
			<button type="button">+ Add Card</button>
		</div>
	);
};