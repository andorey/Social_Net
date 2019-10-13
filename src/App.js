import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<NavBar/>
			<Profile/>
		</div>
	);
}

export default App;