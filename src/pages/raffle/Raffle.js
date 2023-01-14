import React, { useState } from "react";
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

const Raffle = () => {
	const [key, setKey] = useState("all raffles");

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
						<FaTicketAlt />
						<p>All Raffles</p>
					</div>
				}
			>
				<RaffleCard />
				<RaffleCard />
				<RaffleCard />
			</Tab>
			<Tab
				eventKey="register"
				title={
					<div>
						<BsPencilSquare />
						<p>Register</p>
					</div>
				}
			>
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
						<MdGroups />
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
						<ParticipantCard />
						<ParticipantCard />
						<ParticipantCard />
					</div>
				</div>
			</Tab>
			<Tab
				eventKey="winner"
				title={
					<div>
						<FaTrophy />
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
				</div>
			</Tab>
		</Tabs>
	);
};

export default Raffle;
