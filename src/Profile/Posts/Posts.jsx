import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {

	let postData = [
		{id: 1, post: 'How about you?', likesCount: 5},
		{id: 2, post: 'I go to bed, what go you think?', likesCount: 10},
		{id: 3, post: 'I like React and you?', likesCount: 7},
	];

	let postsElements = postData.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

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
