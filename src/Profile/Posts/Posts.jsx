import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

	let postsElements = props.state.postData.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={s.posts}>
			<div className={s.textArea}>
				<h3>My posts :</h3>
				<textarea ref={newPostElement}></textarea>
				<div><button onClick={addPost}>Add Post</button></div>
			</div>
			<div>
				{postsElements}
			</div>
		</div>
	);
}

export default Posts;
