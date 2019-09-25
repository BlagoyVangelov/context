import React from 'react'

export const Button = function(props) {
	return(
		<button onClick={ props.action }>{props.text}</button>
	);
}