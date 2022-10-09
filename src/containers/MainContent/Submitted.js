import styled, { css } from 'styled-components';
import React, { useEffect, useState } from "react";
import Form from './Form';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';

const MySubmitted = styled.div`
  width:  100%;
  height: 80%;
  background: transparent;

`
const MyButton = styled(Button)`
	margin: 10px;
`;

const Submitted = () => {

	const onSubmitQuestionQuiz = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

  return (
    <MySubmitted>
        Submitted response!
    </MySubmitted>
  );
}

export default Submitted;
