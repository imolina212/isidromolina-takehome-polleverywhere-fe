import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaTicketAlt, FaTrophy } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import RaffleCard from "../../components/raffleCard/RaffleCard";
import ParticipantCard from "../../components/participantCard/ParticipantCard";
import { FaKey } from "react-icons/fa";
import "./Raffle.scss";
import WinnerCard from "../../components/winnerCard/WinnerCard";

const API = process.env.REACT_APP_API_URL;

const Raffle = () => {
	const [key, setKey] = useState("all raffles");
	const [participants, setParticipants] = useState([]);
	const { id } = useParams();
	const [raffles, setRaffles] = useState([]);

	useEffect(() => {
		if (id)
			axios
				.get(`${API}/raffles/${id}/participants`)
				.then((response) => {
					console.log("raffle res", response);
					setParticipants(response.data);
				})
				.catch((err) => {
					console.log(err);
				});
	}, [API, id]);

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
	return (
		<Tabs
			id="controlled-tab-example"
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className="tabs-container"
		>
			<Tab
				eventKey="all raffles"
				title={
					<div>
						<FaTicketAlt size={40} />
						<p>All Raffles</p>
					</div>
				}
			>
				{raffles.map((raffle) => {
					return (
						<Link to={`/raffles/${raffle.id}`}>
							<RaffleCard {...raffle} />
						</Link>
					);
				})}
			</Tab>
			<Tab
				eventKey="register"
				title={
					<div>
						<BsPencilSquare size={40} />
						<p>Register</p>
					</div>
				}
			>
				<div className="tabs-container__tab__heading">
					Register to participate in the raffle:
				</div>
				<form className="tabs-container__raffle-form">
					<TextField
						id="outlined-basic"
						label="First Name"
						variant="outlined"
						style={{ width: "50%" }}
						required
					/>
					<TextField
						id="outlined-basic"
						label="Last Name"
						variant="outlined"
						style={{ width: "50%" }}
						required
					/>
					<TextField
						className="tabs-container__raffle-form__input"
						id="outlined-basic"
						label="Email"
						variant="outlined"
						required
					/>
					<TextField
						className="tabs-container__raffle-form__input"
						id="outlined-basic"
						label="Phone"
						variant="outlined"
					/>
					<div className="tabs-container__raffle-form__btn-stack">
						<Button variant="contained">Submit</Button>
						<Button variant="contained">Reset</Button>
					</div>
				</form>
			</Tab>
			<Tab
				eventKey="participants"
				title={
					<div>
						<MdGroups size={40} />
						<p>Participants</p>
					</div>
				}
			>
				<div className="tabs-container__tab">
					<div className="tabs-container__tab__heading">
						Participants: 11 total
					</div>
					<div>
						<TextField
							className="inputField"
							type="text"
							placeholder="Search..."
						/>
					</div>
					<div>
						{participants?.map((participant) => {
							return <ParticipantCard {...participant} />;
						})}
					</div>
				</div>
			</Tab>
			<Tab
				eventKey="winner"
				title={
					<div>
						<FaTrophy size={40} />
						<p>Pick Winner</p>
					</div>
				}
			>
				<div className="tabs-container__tab">
					<div className="tabs-container__tab__heading">
						Pick a Winner
					</div>
					<div>
						<TextField
							className="inputField"
							id="outlined-basic"
							label={
								<p>
									<FaKey />
									<span style={{ paddingLeft: "8px" }}>
										Secret Token
									</span>
								</p>
							}
							variant="outlined"
						/>
					</div>
					<Button variant="contained">
						<strong>Pick a Winner</strong>
					</Button>
					<div className="tabs-container__tab__winner-msg">
						<div className="tabs-container__tab__winner-msg__heading">
							Secret Token
						</div>
						<div>
							The secret token used when creating the raffle must
							be provided.
						</div>
					</div>
					<div className="tabs-container__tab__winner__header">
						Winner
					</div>
					<div className="tabs-container__tab__winner">
						<WinnerCard />
					</div>
				</div>
			</Tab>
		</Tabs>
	);
};

export default Raffle;
