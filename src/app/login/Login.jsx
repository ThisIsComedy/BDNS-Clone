import React from "react";
import GlobalStyle from "../../styles/global.style";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import styled from "styled-components";

const Login = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Wrap>
				<Container>
					<Contents>
						<LoginSection>
							<LoginTitle>로그인</LoginTitle>
							<LoginFieldset>
								<InputTitle>아이디</InputTitle>
								<InputLabel title="아이디를 입력해주세요.">
									<LoginInput placeholder="아이디를 입력해주세요."/>
								</InputLabel>
							</LoginFieldset>
						</LoginSection>
					</Contents>
				</Container>
			</Wrap>
			<Footer />
		</>
	);
};

const Wrap = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto 0;
`;

const Container = styled.div`
	width: 95%;
	margin: 0 auto;
`;

const Contents = styled.div`
	width: 1240px;
	margin: 0 auto;
`;

const LoginSection = styled.div`
	padding: 49px 39px;
	color: #6d6d6d;
`;

const LoginTitle = styled.h2`
	text-align: center;
	font-family: 'LatoRegular','Noto Sans KR';
	font-size: 28px;
	font-weight: 500;
	margin-bottom: 60px;
`;

const LoginFieldset = styled.fieldset`
	position: relative;
	width: 406px;
	margin: 0 auto;
	padding: 0 0 0 9px;
	border: none;
	vertical-align: top;
`;

const InputTitle = styled.h3`
	margin-bottom: 7px;
	font-size: 16px;
	font-weight: 500;
`;

const InputLabel = styled.label`
	margin-bottom: 22px;
`;

const LoginInput = styled.input`
	width: 95%;
	height: 28px;
	line-height: 28px;
	padding: 2px 2px 2px 0px;
	outline: none;
	color: #8f8f91;
	font-size: 12px;
	border: none;
	border-bottom: 1px solid rgb(143,143,145);
`;



export default Login;
