import styled, { css } from 'styled-components'
import Form from './Form';
import Submitted from './Submitted';
import LoadQuiz from './LoadQuiz';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";

const MyMainContent = styled.div`
  width:  100%;
  height: 80%;
  background: transparent;

`

const MainInputArea = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  width:  50%;
  height: 35%;
  background: #add8e6;;
  border-radius: 3px;
  border: 2px solid palevioletred;
`

const MyButton = styled(Button)`
	margin: 10px;
`;

// const quizState = {
//   'play',
// }

const GameContent = (state) => {
  console.log("quizState is: ", state);
  if(state.quizState === 'PLAY'){
    return <Form></Form>;
  } else if(state.quizState === 'SUBMITTED'){
    return <Submitted></Submitted>;
  }
}

const MainContent = () => {
  const [quizState, setQuizState] = useState('PLAY');
  const [chosenQuiz, setChosenQuiz] = useState('PLAY');

  const buttonText = quizState === 'PLAY' ? "Submit quiz" : "Start new quiz";
  const buttonOutline = quizState === 'PLAY' ? "outlined" : "contained";
	const onSubmit = (event) => {
    if(quizState === 'PLAY'){
      setQuizState('SUBMITTED');
    } else {
      setQuizState('PLAY');
    }
	}

  const chooseQuiz = (value) => {
    console.log("chooseQuiz value is: ", value);
    setChosenQuiz(value);
  }

  return (
    <MyMainContent>
      <LoadQuiz chooseQuiz={chooseQuiz}></LoadQuiz>
      <MainInputArea>

        <GameContent chosenQuiz={chosenQuiz} quizState={quizState}></GameContent>
        <MyButton variant={buttonOutline} onClick={onSubmit}>{buttonText}</MyButton>
      </MainInputArea>
    </MyMainContent>
  );
}

export default MainContent;
