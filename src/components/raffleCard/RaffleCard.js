import React from "react";

import {
	FaRegCalendarPlus,
	FaRegCalendarCheck,
	FaTrophy,
} from "react-icons/fa";
import "./RaffleCard.scss";

const RaffleCard = ({ raffle_name, winner_id }) => {
	console.log("raffle prop", raffle_name);
	return (
		<div className="raffle-card">
			<div className="raffle-card__name">{raffle_name}</div>
			<div className="raffle-card__date-created">
				<FaRegCalendarPlus />
				<p>Created on: Sat May 22, 2021 at 7:59:27 PM</p>
			</div>
			<div className="raffle-card__winner-id">
				<FaTrophy />
				<p>Winner id: {winner_id ? winner_id : "TBD"}</p>
			</div>
			<div className="raffle-card__raffle-date">
				<FaRegCalendarCheck />
				<p>Raffled on: Sat May 22, 2021 at 8:03:32 PM</p>
			</div>
		</div>
	);
};

export default RaffleCard;
