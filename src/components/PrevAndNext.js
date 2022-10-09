import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';

let answers = [];

const PrevAndNext = () => {
	const [count, setCount] = useState(1);
	// const [answers, setAnswers] = useState([]);
	
	const onSubmit = (event) => {
	}

	const onChangeValue = (event) =>  {
	  }

	return (
		<div onChange={onChangeValue}>
			<Button variant={'outlined'} onClick={onSubmit}>Prev Q</Button>
			<Button variant={'outlined'} onClick={onSubmit}>Next Q</Button>
		</div>
	)
}

export default PrevAndNext;
