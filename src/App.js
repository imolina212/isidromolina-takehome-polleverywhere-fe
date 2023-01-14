import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Raffle from "./pages/raffle/Raffle";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/raffle" element={<Raffle />} />
			</Routes>
		</div>
	);
}

export default App;
