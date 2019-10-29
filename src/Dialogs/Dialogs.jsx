import React from 'react';
import s from './Dialogs.module.css';
// import Message from "./Messages/Message";
// import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{props.dialogsElements}
			</div>
			<div className={s.messages}>
				{props.messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;