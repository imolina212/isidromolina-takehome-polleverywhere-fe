import React from "react";

import { FaHashtag, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./ParticipantCard.scss";

const ParticipantCard = () => {
	return (
		<div className="participant-card">
			<div className="participant-card__image">
				<img src="https://via.placeholder.com/150" alt="" />
			</div>
			<div className="participant-card__info">
				<div className="participant-card__info__name">Leonie Wolf</div>
				<div className="participant-card__info__id">
					<FaHashtag className="icon" />
					<div>10</div>
				</div>
				<div className="participant-card__info__email">
					<MdEmail className="icon" />
					<div>Jaszmyne.Hegmann96@gmail.com</div>
				</div>
				<div className="participant-card__info__phone">
					<FaPhone className="icon" />
					<div>1 (212) 123-4567</div>
				</div>
			</div>
		</div>
	);
};

export default ParticipantCard;
