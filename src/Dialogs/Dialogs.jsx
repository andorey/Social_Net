import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
	let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>);

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let textMessage = newMessageElement.current.value;
		alert(textMessage);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div className={s.textAreaButton}>
					<textarea ref={newMessageElement}></textarea>
					<button onClick={addMessage}>Add Message</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;