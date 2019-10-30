import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

	let postsElements = props.state.postData.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

	return (
		<div className={s.posts}>
			<div className={s.textArea}>
				<h3>My posts :</h3>
				<textarea> </textarea>
				<button>Add Post</button>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
}

export default Posts;
