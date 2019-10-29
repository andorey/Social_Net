import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
// import Post from "./Posts/Post/Post";

const Profile = (props) => {
	return (
		<div className={s.header}>
			<div>
				<img
					src="https://images.wallpaperscraft.com/image/mountain_lake_nature_81057_2560x1080.jpg"
					alt="picture"/>
			</div>
			<div className={s.myPhoto}>
				<div className={s.icon}>
					<img
						src="https://clutch.ua/crops/ba1ddb/360x0/1/0/2019/05/17/Ns355MiU9gTtcUX1sI0h2JsX8rDxjwTv.jpeg"
						alt=""/>
				</div>
				<div className={s.aboutMe}>
					I am JS Developer. <br/> and I think that React is very cool framework! :)
				</div>
			</div>
			<div>
				<Posts postsElements={props.postsElements}/>
			</div>
		</div>
	);
}

export default Profile;
