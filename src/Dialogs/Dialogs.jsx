import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dimych'},
		{id: 3, name: 'Alex'},
	];

	let dialogsElements = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);


	let messagesData = [
		{id: 1, message: 'Hi, how are you?'},
		{id: 2, message: "Are you O'k?"},
		{id: 3, message: 'Good night my friends. I go to bed'},
	];

	let messagesElements = messagesData.map(m => <Message message={m.message}/>);

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