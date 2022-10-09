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

const Form = ({ chosenQuiz }) => {
	const [qIndex, setqIndex] = useState(1);
	const [alternative1, setalternative1] = useState(false);
	const [alternative2, setalternative2] = useState(false);
	const [alternative3, setalternative3] = useState(false);
	const [alternative4, setalternative4] = useState(false);

	// console.log("alternative1 is: ", alternative1);
	// console.log("alternative2 is: ", alternative2);
	// console.log("alternative3 is: ", alternative3);
	// console.log("alternative4 is: ", alternative4);

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

	return (
		<MyForm onChange={onChangeValue}>
			<p>What do you think of PU South jam?</p>
			<br />
			Alternative 1:
			<Checkbox
				checked={alternative1}
				onChange={handleChange('alternative1')}
				value="alternative1"
			/>
			<br />
			Alternative 2:
			<Checkbox
				checked={alternative2}
				onChange={handleChange('alternative2')}
				value="alternative2"
				color="primary"
			/>
			<br />
			Alternative 3:
			<Checkbox
				checked={alternative3}
				onChange={handleChange('alternative3')}
				value="alternative3"
				color="primary"
			/>
			<br />
			Alternative 4:
			<Checkbox
				checked={alternative4}
				onChange={handleChange('alternative4')}
				value="alternative4"
				color="primary"
			/>
			<br />
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>
			{/* <p>What do you think of PU South jam?</p>
			<input type="radio" value="1" name="gender" /> Alternative 1 <br />
			<input type="radio" value="2" name="gender" /> Alternative 2 <br />
			<input type="radio" value="3" name="gender" /> Alternative 3 <br />
			<input type="radio" value="4" name="gender" /> Alternative 4 <br />
			
			<MyButton variant={'contained'} onClick={onSubmitQuestion}>Submit</MyButton>
			<PrevAndNext changeQuestion={changeQuestion}></PrevAndNext>
			<p>Question {qIndex} / 50 </p> */}
		</MyForm>
	)
}

export default Form;
