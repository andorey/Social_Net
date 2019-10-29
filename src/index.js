import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
	{id: 1, name: 'Andrew'},
	{id: 2, name: 'Dimych'},
	{id: 3, name: 'Alex'},
	{id: 4, name: 'Colin'},
	{id: 5, name: 'Agnieszka'},
];


let messagesData = [
	{id: 1, message: 'Hi, how are you?'},
	{id: 2, message: "Are you O'k?"},
	{id: 3, message: 'Good night my friends. I go to bed'},
	{id: 4, message: 'To go shopping during day'},
	{id: 5, message: 'She is do not know where I live'},
];


let postData = [
	{id: 1, post: 'How about you?', likesCount: 5},
	{id: 2, post: 'I go to bed, what go you think?', likesCount: 10},
	{id: 3, post: 'I like React and you?', likesCount: 7},
	{id: 4, post: 'I try change location data props', likesCount: 18},
	{id: 5, post: 'Do you want how old are you?', likesCount: 4},
];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
