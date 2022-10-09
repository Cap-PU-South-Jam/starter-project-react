import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import styled, { css } from 'styled-components'
import PrevAndNext from '../../components/PrevAndNext'
let answers = [];

const MyForm = styled.div`
	margin-left: 25%;
	margin-right: 25%;
	width:  50%;
	height: 35%;
	background: #add8e6;;
	border-radius: 3px;
	border: 2px solid palevioletred;
`

const Form = () => {
	const [count, setCount] = useState(1);
	// const [answers, setAnswers] = useState([]);


	const onSubmitQuestion = (event) => {
		answers.push(count);
		console.log("answers is: ", answers);
	}

	const onSubmitQuestionQuiz = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

	const onChangeValue = (event) => {
		setCount(event.target.value);
		console.log(event.target.value);
	}

	return (
		<MyForm onChange={onChangeValue}>
			<p>What do you think of PU South jam?</p>
			<input type="radio" value="1" name="gender" /> Alternative 1 <br />
			<input type="radio" value="2" name="gender" /> Alternative 2 <br />
			<input type="radio" value="3" name="gender" /> Alternative 3 <br />
			<input type="radio" value="4" name="gender" /> Alternative 4 <br />
			<Button variant={'outlined'} onClick={onSubmitQuestion}>Submit</Button>
			<PrevAndNext></PrevAndNext>
			<p>Question 1  / 50 </p>

		</MyForm>
	)
}

export default Form;
