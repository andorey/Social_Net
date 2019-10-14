import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={`${s.nav} ${s.active}`}>
			<div className={`${s.item}`}>
				<a href="/profile">Profile</a>
			</div>
			<div className={s.item}>
				<a href="/dialogs">Messages</a>
			</div>
			<div className={s.item}>
				<a href="">News</a>
			</div>
			<div className={s.item}>
				<a href="">Music</a>
			</div>
			<div className={s.item}>
				<a href="">Settings</a>
			</div>
		</div>
	);
}

export default NavBar;
