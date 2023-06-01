import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import GlobalStyle from '../../styles/global.style';
import { styled } from 'styled-components';

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <BdnsLogo src='/assets/bdns_about/bdns-presents.png' alt='bdns-presents' />
        <Quotes>재미있는 일만 합니다.</Quotes>
        <Quotes>
          In the end, everything is a gag.
          <br />
          - Charlie Chaplin -
        </Quotes>
        <Quotes>
          We are the proof of your sense of humor.
          <br />
          - BDNS -
        </Quotes>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BdnsLogo = styled.img`
  width: 227px;
  height: 240px;
  margin-bottom: 50px;
`;

const Quotes = styled.h4`
  font-size: 20px;
  color: black;
  font-family: 'LatoRegular','Noto Sans KR';
  text-align: center;
  margin-bottom: 50px;
  line-height: 30px;
`;

export default About;