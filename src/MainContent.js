import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components'
import Form from './Form';
import PrevAndNext from './PrevAndNext';

const MyMainContent = styled.div`
  width:  100%;
  height: 80%;
  background: transparent;

`


function MainContent() {
  return (
    <MyMainContent>
        <Form></Form>
    </MyMainContent>
  );
}

export default MainContent;
