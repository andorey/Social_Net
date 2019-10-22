import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<div className={s.header}>
			<img src="https://seeklogo.com/images/M/MASON-logo-6EC4494474-seeklogo.com.png" alt=""/>
			<div>Novus Ordo Seclorum</div>
			<img src={window.location.origin + '/img/ill.png'} alt=""/>
		</div>
	)
}

export default Header;
