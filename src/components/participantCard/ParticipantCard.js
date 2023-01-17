import React from "react";

import { FaHashtag, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./ParticipantCard.scss";

const ParticipantCard = ({ id, firstname, lastname, email, phone }) => {
	return (
		<div className="participant-card">
			<div className="participant-card__image">
				<img src="https://via.placeholder.com/150" alt="" />
			</div>
			<div className="participant-card__info">
				<div className="participant-card__info__name">
					{firstname} {lastname}
				</div>
				<div className="participant-card__info__id">
					<FaHashtag className="icon" />
					<div>{id}</div>
				</div>
				<div className="participant-card__info__email">
					<MdEmail className="icon" />
					<div>{email}</div>
				</div>
				<div className="participant-card__info__phone">
					<FaPhone className="icon" />
					<div>{phone}</div>
				</div>
			</div>
		</div>
	);
};

export default ParticipantCard;
