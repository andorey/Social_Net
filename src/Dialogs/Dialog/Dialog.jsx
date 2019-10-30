import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={/dialogs/ + props.id}>
				<div className={s.photo}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-Rtjo86Y2Wo-a_WCxI-Eao3f-L9VbK9eGMoBSg-Pq5dhkaSd"
						alt=""/>
					{props.name}
				</div>
			</NavLink>
		</div>
	);
}

export default Dialog;