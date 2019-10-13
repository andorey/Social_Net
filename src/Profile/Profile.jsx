import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.header}>
			<div>
				<img src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg" alt="picture"/>
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					new post
				</div>
				<div>
					post 1
				</div>
				<div>
					post 2
				</div>
			</div>
		</div>
	);
}

export default Profile;
