import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
	return (
		<div className={s.posts}>
			<div className={s.textArea}>
				<h3>My posts :</h3>
				<textarea> </textarea>
				<button>Add Post</button>
			</div>
			<div>
				{props.postsElements}
			</div>
		</div>
	);
}

export default Posts;
