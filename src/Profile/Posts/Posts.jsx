import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
	return (
		<div className={s.posts}>
			<div className={s.textArea}>
				My posts :
				<textarea cols="30" rows="2"> </textarea>
				<button>Add Post</button>
			</div>
			<div>
				<Post message = "Hi! how are you?" like=" : 5"/>
				<Post message = "I'm go to bed" like=" : 10"/>
			</div>
		</div>
	);
}

export default Posts;
