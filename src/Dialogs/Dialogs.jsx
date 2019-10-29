import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
	let messagesElements = props.messagesData.map(m => <Message message={m.message}/>);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;