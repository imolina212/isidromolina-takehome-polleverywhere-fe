import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import RaffleCard from "../../components/raffleCard/RaffleCard";
import "./Home.scss";

const API = process.env.REACT_APP_API_URL;
const Home = () => {
	const [raffles, setRaffles] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/raffles`)
			.then((response) => {
				console.log("HOME USE-EFFECT", response);
				setRaffles(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [API]);

	console.log("raffles", raffles);
	return (
		<div className="home-page">
			<div className="home-page__heading">Raffle App</div>
			<div className="home-page__form__heading">New Raffle:</div>
			<form className="home-page__form">
				<TextField
					id="outlined-basic"
					label="Raffle Name"
					variant="outlined"
					required
				/>
				<TextField
					id="outlined-basic"
					label="Raffle Secret Token"
					variant="outlined"
					required
				/>
				<p className="home-page__form__message">
					You must remember the Raffle Token because it will be asked
					when picking a winner
				</p>
				<Button variant="contained">Create New Raffle</Button>
			</form>
			<div className="home-page__raffle-list">
				<div className="home-page__raffle-list__heading">
					All Raffles:
				</div>
				{raffles.map((raffle, index) => {
					return (
						<Link to={`/raffles/${raffle.id}`}>
							<RaffleCard {...raffle} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
