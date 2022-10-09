
import styled, { css } from 'styled-components';
import Header from '../../components/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../../components/Footer';

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
