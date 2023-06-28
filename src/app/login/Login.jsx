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
								<InputSet>
									<InputWrap>
										<InputTitle>아이디</InputTitle>
										<InputLabel title='아이디를 입력해주세요.'>
											<LoginInput placeholder='아이디를 입력해주세요.' />
										</InputLabel>
									</InputWrap>
									<InputWrap>
										<InputTitle>비밀번호</InputTitle>
										<InputLabel title='비밀번호를 입력해주세요.'>
											<LoginInput
												placeholder='비밀번호를 입력해주세요.'
												type='password'
											/>
										</InputLabel>
									</InputWrap>
								</InputSet>
								<SecureAccess>
									<img src='https://img.echosting.cafe24.com/design/skin/default/member/ico_access.gif' />
									보안접속
								</SecureAccess>
								<LoginButton>로그인</LoginButton>
								<Find>
									<FindItem>아이디 찾기</FindItem>
									<FindItem>비밀번호 찾기</FindItem>
									<FindItem>회원가입</FindItem>
								</Find>
								<KakaoButton>
									<KakaoLogo src='https://bdns.co.kr/web/images/kaa.jpg' />
									카카오 3초 로그인
								</KakaoButton>
								<UnloginWrap>
									<UnloginTitle>비회원으로 주문을 하셨다면?</UnloginTitle>
									<UnloginButton>비회원주문조회</UnloginButton>
								</UnloginWrap>
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
	font-family: "LatoRegular", "Noto Sans KR";
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
	margin-bottom: 8px;
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
	border-bottom: 1px solid #d6d6d9;
	font-family: "돋움", Dotum;
`;

const InputSet = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const InputWrap = styled.div``;

const SecureAccess = styled.p`
	width: 406px;
	display: block;
	padding: 0 0 0 5px;
	margin: 0 auto;
	margin: 10px 0;
	color: #757575;
`;

const LoginButton = styled.a`
	transition: all 0.5s;
	display: block;
	text-align: center;
	background: #222;
	color: #fff;
	height: 55px;
	line-height: 55px;
	font-size: 17px;
	margin-top: 25px;
	text-decoration: none;
	cursor: pointer;
`;

const Find = styled.ul`
	width: 100%;
	padding: 0 !important;
	margin-top: 15px !important;
	margin-bottom: 100px !important;
`;

const FindItem = styled.li`
	background: none;
	text-align: center;
	padding: 0 !important;
	width: 33.333%;
	position: relative;
	float: left;
	list-style: none;
	color: #6d6d6d;
	font-size: 15px;
`;

const KakaoButton = styled.a`
	display: inline-block;
	width: 100%;
	height: 59px;
	background: #fee500;
	text-align: center;
	border-radius: 10px;
	text-decoration: none;
	line-height: 59px;
	font-weight: 500;
	color: #381f1e;
	font-size: 16px;
	cursor: pointer;
`;

const KakaoLogo = styled.img`
	position: relative;
	top: 18px;
	margin-right: 10px;
	vertical-align: top;
`;

const UnloginWrap = styled.div`
	width: 100%;
	border-top: 1px solid #d2d2d2;
	padding-top: 26px;
	margin-top: 60px;
	overflow: hidden;
	color: #6d6d6d;
`;

const UnloginTitle = styled.h2`
	float: left;
	font-size: 16px;
	font-weight: 500;
`;

const UnloginButton = styled.h3`
	float: right;
	font-size: 16px;
	font-weight: 500;
	color: #8c8c8c;
	border-bottom: 1px solid #8c8c8c;
	padding-bottom: 4px;
`;



export default Login;
