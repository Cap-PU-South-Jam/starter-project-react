import styled, { css } from 'styled-components'
import Form from './Form';
import PrevAndNext from '../../components/PrevAndNext';
import { Button } from '@mui/material';

const MyMainContent = styled.div`
  width:  100%;
  height: 80%;
  background: transparent;

`


function MainContent() {

	const onSubmitQuestionQuiz = (event) => {
		// answers.push(count);
		// console.log("answers is: ", answers);
	}

  return (
    <MyMainContent>
        <Form></Form>
        <Button variant={'outlined'} onClick={onSubmitQuestionQuiz}>Submit Quiz!</Button>
    </MyMainContent>
  );
}

export default MainContent;
