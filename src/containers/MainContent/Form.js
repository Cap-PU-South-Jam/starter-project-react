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
			
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>
			<PrevAndNext></PrevAndNext>
			<p>Question 1  / 50 </p>

		</MyForm>
	)
}

export default Form;
