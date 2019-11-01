import React from 'react';
import './App.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {

	return (
		<div className="app-wrapper">
			<Header/>
			<NavBar/>
			<div className="app-wrapper-content">
				{/*<Route path="/profile" component={Profile}/>*/}
				{/*<Route path="/dialogs" component={Dialogs}/>*/}
				{/*<Route path="/news" component={Dialogs}/>*/}
				{/*<Route path="/music" component={Profile}/>*/}
				{/*<Route path="/settings" component={Profile}/>*/}

				<Route path="/profile"
					   render={() => <Profile
						   state={props.state.postPage}/>}/>
				<Route path="/dialogs"
					   render={() => <Dialogs
						   state={props.state.dialogsPage}/>}/>


			</div>
		</div>
	);
}

export default App;
