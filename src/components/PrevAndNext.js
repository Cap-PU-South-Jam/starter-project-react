
import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

let answers = [];

const Buttons = styled.div`
	margin-top: 10px;
`

const PrevAndNext = ({changeQuestion}) => {
	const [count, setCount] = useState(1);
	// const [answers, setAnswers] = useState([]);
	
	const onSubmit = (event) => {
	}

	const onChangeValue = (value) =>  {
		changeQuestion(value);
	}

	return (
		<Buttons onChange={onChangeValue}>
			<Button variant={'outlined'} onClick={() => onChangeValue(-1)}>Prev Q</Button>
			<Button variant={'outlined'} onClick={() => onChangeValue(1)}>Next Q</Button>
		</Buttons>
	)
}

export default PrevAndNext;
