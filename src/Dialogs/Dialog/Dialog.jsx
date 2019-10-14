import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
	return (
		<div className={s.dialog}>
			{props.dialog}
		</div>
	);
}

export default Dialog;