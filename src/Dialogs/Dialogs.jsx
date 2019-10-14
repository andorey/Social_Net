import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<Dialog dialog="Andrew"/>
				<Dialog dialog="Dmitri"/>
				<Dialog dialog="Alex"/>
			</div>
			<div className={s.messages}>
				<Message message="Hi, how are you?" />
				<Message message="Are you O'k?" />
				<Message message="Good night my friends!" />
			</div>
		</div>
	);
}

export default Dialogs;