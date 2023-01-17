import React from "react";

import { FaHashtag, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./WinnerCard.scss";

const WinnerCard = () => {
	return (
		<div className="card">
			<div className="card__image">
				<img src="/winner.png" alt="" />
			</div>
			<div className="card__info">
				<div className="card__info__name">
					<div>Marvin Bosco</div>
					<div>Registered on Sat May 22 2021 at 8:03:17 PM</div>
				</div>
				<div className="card__info__contact-info">
					<div className="card__info__contact-info__item">
						<FaHashtag />
						<div>5</div>
					</div>
					<div className="card__info__contact-info__item">
						<MdEmail />
						<div>Arlene8@yahoo.com</div>
					</div>
					<div className="card__info__contact-info__item">
						<FaPhone />
						<div>1(212)304-2630</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WinnerCard;
