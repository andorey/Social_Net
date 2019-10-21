import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

	let dialogsData =[
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dimych'},
		{id: 3, name: 'Alex'},
	]

	let messagesData =[
		{id: 1, message: 'Hi, how are you?'},
		{id: 2, message: "Are you O'k?"},
		{id: 3, message: 'Good night my friends. I go to bed'},
	]

	let dialogsElements = [
		<Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>,
		<Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>,
		<Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>,
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>

				{dialogsElements}

				{/*<Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
				{/*<Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
				{/*<Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
			</div>
			<div className={s.messages}>
				{/*<Message message={messagesData[0].message} />*/}
				{/*<Message message={messagesData[1].message} />*/}
				{/*<Message message={messagesData[2].message} />*/}
			</div>
		</div>
	);
}

export default Dialogs;