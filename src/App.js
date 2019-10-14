import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header/>
			<NavBar/>
			<div className="app-wrapper-content">
				<Profile/>
				{/*<Dialogs/>*/}
			</div>
		</div>
	);
}

export default App;
