
import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

let answers = [];

const Buttons = styled.div`
	margin-top: 10px;
`

const PrevAndNext = () => {
	const [count, setCount] = useState(1);
	// const [answers, setAnswers] = useState([]);
	
	const onSubmit = (event) => {
	}

	const onChangeValue = (event) =>  {
	  }

	return (
		<Buttons onChange={onChangeValue}>
			<Button variant={'outlined'} onClick={onSubmit}>Prev Q</Button>
			<Button variant={'outlined'} onClick={onSubmit}>Next Q</Button>
		</Buttons>
	)
}

export default PrevAndNext;
