import styled, { css } from 'styled-components';
import React, { useEffect, useState } from "react";
import Form from './Form';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MyQuiz = styled.div`
  height: 15%;
  background: transparent;
  margin-left: 25%;
  margin-right: 25%;
  width:  50%;
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: #add8e6;;
`
const QuizSize = styled.div`
  margin-top: 10px;
  width: 50%;
  margin-right: 25%;
  margin-left: 25%;
`

const Score = styled.p`
`;

const MyButton = styled(Button)`
	margin: 10px;
`;

const LoadQuiz = ({chooseQuiz}) => {

	const onSubmitScore = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

    const [quiz, setQuiz] = React.useState('');

    const handleChange = (event) => {
        setQuiz(event.target.value);
        chooseQuiz(event.target.value);
    };


    return (
        <MyQuiz>
            Which quiz do you want to test?
            <QuizSize>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quiz</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quiz}
                            label="Quiz"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>First quiz</MenuItem>
                            <MenuItem value={2}>Second quiz</MenuItem>
                            <MenuItem value={3}>Third quiz</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </QuizSize>
        </MyQuiz>
    );
}

export default LoadQuiz;
