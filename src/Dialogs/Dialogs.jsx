import React from 'react';
import s from './Dialogs.css';
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<Dialog/>
		</div>
	)
}

export default Dialogs;