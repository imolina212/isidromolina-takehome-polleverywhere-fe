import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
