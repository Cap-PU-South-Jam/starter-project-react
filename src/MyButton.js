import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

const MyButton = ({name}) => {
	// const [count, setCount] = useState(0);

	// const increase = () => {
	// 	setCount(count+1);
	// }

	// const onChange = (e) => {
	// 	setVal(e.target.value);
	// }

	// const onSubmit = (val) => {
	// 	event.preventDefault();
	// 	console.log("what is the value?", val);
	// 	// handle submit logic using "val"
	// }
	function onSubmit(e) {
		e.preventDefault();
		console.log("what is the value?", e);
        // load data
	}

	return (
		<div>
            <Button variant={'outlined'} onClick={() => {alert('clicked')}}>{name}</Button>
		</div>
	)
}

export default MyButton;
