import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import styled, { css } from 'styled-components'
import PrevAndNext from '../../components/PrevAndNext'
let answers = [];

const MyForm = styled.div`

`

const MyButton = styled(Button)`
	margin: 10px;
`;

const Form = ({chosenQuiz}) => {
	const [qIndex, setqIndex] = useState(1);
	// const [answers, setAnswers] = useState([]);

	const changeQuestion = (value) => {
		console.log("value is: ", value)
		setqIndex(qIndex + value);
	} 

	const onSubmitQuestion = (event) => {
		setqIndex(qIndex + 1);
		answers.push(qIndex);
		console.log("answers is: ", answers);
	}

	const onSubmitQuestionQuiz = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

	const onChangeValue = (event) => {
		// setqIndex(event.target.value);
		// console.log(event.target.value);
	}

	return (
		<MyForm onChange={onChangeValue}>
			<p>What do you think of PU South jam?</p>
			<input type="radio" value="1" name="gender" /> Alternative 1 <br />
			<input type="radio" value="2" name="gender" /> Alternative 2 <br />
			<input type="radio" value="3" name="gender" /> Alternative 3 <br />
			<input type="radio" value="4" name="gender" /> Alternative 4 <br />
			
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>
			<PrevAndNext changeQuestion={changeQuestion}></PrevAndNext>
			<p>Question {qIndex} / 50 </p>

		</MyForm>
	)
}

export default Form;
