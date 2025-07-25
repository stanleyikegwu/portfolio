import React from "react";

const Greeting = (props) =>{
	return (
		<div>
		<h2>Hello {props.name}</h2>,
		<p> your name is {props.name},you are {props.age} yrs old, and learning frontend.</p>
		</div>
		)
};
export default Greeting;