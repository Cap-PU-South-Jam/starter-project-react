import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const MyHomePage = styled.div`
  width:  100%;
  height: 1200px;
  background: transparent;
`

function HomePage() {
    return (
        <MyHomePage>

            <Header/>
            <MainContent/>
            <Footer/>
        </MyHomePage>
    );
}

export default HomePage;
