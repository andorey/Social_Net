import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<NavBar/>
				<div className="app-wrapper-content">
					<Route path="/profile" component={Profile}/>
					<Route path="/dialogs" component={Dialogs}/>
					<Route path="/news" component={Dialogs}/>
					<Route path="/music" component={Dialogs}/>
					<Route path="/settings" component={Dialogs}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
