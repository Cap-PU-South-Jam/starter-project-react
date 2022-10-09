import styled, { css } from 'styled-components';
import React, { useEffect, useState } from "react";
import Form from './Form';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';

const MySubmitted = styled.div`
  margin-top: 15%;
  margin-left: 25%;
  width:  50%;
  height: 50%;
  background: transparent;

`
const Score = styled.p`
`;

const MyButton = styled(Button)`
	margin: 10px;
`;

const Submitted = () => {

	const onSubmitScore = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

  return (
    <MySubmitted>
        Quiz submitted! <br/>
        <Score> Your score is 50 / 70 </Score>
        <br/>
        <MyButton variant={'outlined'} onClick={onSubmitScore}>Publish result</MyButton>
    </MySubmitted>
  );
}

export default Submitted;
