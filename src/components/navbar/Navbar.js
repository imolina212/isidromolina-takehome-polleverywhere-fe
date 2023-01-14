import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__left">
				<Link to="/">
					<div className="navbar__left__brand">Raffle App</div>
				</Link>
			</div>
			<div className="navbar__right">
				<Link to="/">
					<div className="navbar__right__item">Home</div>
				</Link>
				<Link to="/raffle">
					<div className="navbar__right__item">Raffle</div>
				</Link>
				<Link to="/participants">
					<div className="navbar__right__item">Participants</div>
				</Link>
				<Link to="/winner">
					<div className="navbar__right__item">Winner!</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
