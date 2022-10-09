import React, { useEffect, useState } from "react";
import {
	Button, FormControl,
	FormLabel,
	FormControlLabel,
	FormGroup,
	Checkbox,
	Box
} from '@mui/material';
import styled, { css } from 'styled-components'
import PrevAndNext from '../../components/PrevAndNext'

let answers = [];

const MyForm = styled.div`

`

const MyButton = styled(Button)`
	margin: 10px;
`;

const getObjectByIndex = (chosenQuiz, qIndex) => {
	console.log("chosenQuiz is:......", chosenQuiz);
	if(Object.keys(chosenQuiz).length === 0){
		console.log("returned empty object!");
		return {};
	} else {
		console.log("returned chosenQuiz!");
		return chosenQuiz.Question[qIndex];
	}
}


const Form = ({ chosenQuiz }) => {
	// console.log("Form - chosenQuiz is: ", chosenQuiz);
	const [qIndex, setqIndex] = useState(0);
	const [question, setQuestion] = useState({});
	const [loadedQuiz, setLoadedQuiz] = useState(false);
	const [alternative1, setalternative1] = useState(false);
	const [alternative2, setalternative2] = useState(false);
	const [alternative3, setalternative3] = useState(false);
	const [alternative4, setalternative4] = useState(false);

	if(Object.keys(chosenQuiz).length !== 0 && loadedQuiz === false){
		setQuestion(getObjectByIndex(chosenQuiz, qIndex));
		setLoadedQuiz(true);
	} 

	const handleChange = name => event => {
		// this.setState({ [name]: event.target.checked });
		// console.log("name is: ", name);
		if(name === 'alternative1'){
			setalternative1(event.target.checked);
		} else if(name === 'alternative2'){
			setalternative2(event.target.checked);
		} else if(name === 'alternative3'){
			setalternative3(event.target.checked);
		} else if(name === 'alternative4'){
			setalternative4(event.target.checked);
		}
	};

	// const [answers, setAnswers] = useState([]);

	const changeQuestion = (value) => {
		setqIndex(qIndex + value);
	}

	const onSubmitQuestion = (event) => {
		setqIndex(qIndex + 1);
		answers.push(qIndex);
	}

	const onSubmitQuestionQuiz = (event) => {
		// answers.push(count);
	}

	const onChangeValue = (event) => {
		// setqIndex(event.target.value);
	}
	if(loadedQuiz){
		console.log("question is", question.Answer[0].Text);
	}
	
	return (
		<MyForm onChange={onChangeValue}>
			<p>What do you think of PU South jam?</p>
			<br />
			{loadedQuiz ? question.Answer[0].Text : "Default"}
			<Checkbox
				checked={alternative1}
				onChange={handleChange('alternative1')}
				value={loadedQuiz ? question.Answer[0].Text : "Default"}
			/>
			<br />
			{loadedQuiz ? question.Answer[1].Text : "Default"}
			<Checkbox
				checked={alternative2}
				onChange={handleChange('alternative2')}
				value={loadedQuiz ? question.Answer[1].Text : "Default"}
				color="primary"
			/>
			<br />
			{loadedQuiz ? question.Answer[2].Text : "Default"}
			<Checkbox
				checked={alternative3}
				onChange={handleChange('alternative3')}
				value={loadedQuiz ? question.Answer[2].Text : "Default"}
				color="primary"
			/>
			<br />
			{loadedQuiz ? question.Answer[3].Text : "Default"}
			<Checkbox
				checked={alternative4}
				onChange={handleChange('alternative4')}
				value={loadedQuiz ? question.Answer[3].Text : "Default"}
				color="primary"
			/>
			<br />
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>
			<PrevAndNext changeQuestion={changeQuestion}></PrevAndNext>
			<p>Question {qIndex} / 50 </p>
			{/* <p>What do you think of PU South jam?</p>
			<input type="radio" value="1" name="gender" /> Alternative 1 <br />
			<input type="radio" value="2" name="gender" /> Alternative 2 <br />
			<input type="radio" value="3" name="gender" /> Alternative 3 <br />
			<input type="radio" value="4" name="gender" /> Alternative 4 <br />
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>

			 */}
		</MyForm>
	)
}

export default Form;
