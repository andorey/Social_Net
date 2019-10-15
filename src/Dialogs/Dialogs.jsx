import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<Dialog name="Andrew" id="1"/>
				<Dialog name="Dimych" id="2"/>
				<Dialog name="Alex" id="3"/>
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