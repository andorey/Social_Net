import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<div className={s.item}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-Rtjo86Y2Wo-a_WCxI-Eao3f-L9VbK9eGMoBSg-Pq5dhkaSd"
					alt=""/>
				{props.message}
				<div>
					<span>like</span>
					{props.like}
				</div>
			</div>
		</div>
	);
}

export default Post;
