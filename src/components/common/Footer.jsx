import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Ansim from "/assets/common/ansim.png";

const Footer = () => {
	return (
		<FooterContainer>
			<FullInnerFrame>
				<LeftHalfInnerFrame>
					<QuarterInnerFrame>
						<SectionTitle>ABOUT</SectionTitle>
						<SectionList>
							<Link to='/bdns/about'>
								<SectionItem>BDNS</SectionItem>
							</Link>
							<Link to='/bdns/collaboration'>
								<SectionItem>COLLABORATION</SectionItem>
							</Link>
							<Link to='/bdns/shop'>
								<SectionItem>ORIGINAL</SectionItem>
							</Link>
						</SectionList>
					</QuarterInnerFrame>
					<QuarterInnerFrame>
						<SectionTitle>SOCIAL</SectionTitle>
						<SectionList>
							<a
								href='https://www.instagram.com/bdnspresents/'
								target='_blank'
								rel='noreferrer'>
								<SectionItem>INSTAGRAM</SectionItem>
							</a>
							<a
								href='https://www.youtube.com/channel/UC5xLohcPE65Y-U62X6snmRQ'
								target='_blank'
								rel='noreferrer'>
								<SectionItem>YOUTUBE</SectionItem>
							</a>
						</SectionList>
					</QuarterInnerFrame>
					<QuarterInnerFrame>
						<SectionTitle>HELP</SectionTitle>
						<SectionList>
							<Link to='/member/cart'><SectionItem>MYPAGE</SectionItem></Link>
							<Link to='/help/faq'><SectionItem>HELP&FAQ</SectionItem></Link>
							<Link to='/help/board'><SectionItem>Q&A</SectionItem></Link>
						</SectionList>
					</QuarterInnerFrame>
					<QuarterInnerFrame>
						<SectionTitle>INFO</SectionTitle>
						<SectionList>
							<Link to='/member/privacy'><SectionItem>PRIVACY POLICY</SectionItem></Link>
							<Link to='/member/agreement'><SectionItem>AGREEMENT</SectionItem></Link>
						</SectionList>
					</QuarterInnerFrame>
				</LeftHalfInnerFrame>
				<RightHalfInnerFrame>
					<AddressFrame>
						<BigSpan>
							<SmallSpan>COMPANY </SmallSpan>
							<span> BDNS </span>
						</BigSpan>
						<BigSpan>
							<SmallSpan>CEO</SmallSpan>
							<span> Kim jin hyeok</span>
						</BigSpan>
						<BigSpan>
							<SmallSpan>BUSINESS LICENSE</SmallSpan>
							<span> 510-86-02120</span>
						</BigSpan>
						<br />
						<BigSpan>
							<SmallSpan>NETWORK LICENSE</SmallSpan>
							<span> 2021-서울마포-3088</span>
						</BigSpan>
						<br />
						<BigSpan>
							<SmallSpan>ADDRESS </SmallSpan>
							<span>
								single house, 37, Wowsan-ro 3-an-gil, Mapo-gu, Seoul, Republic
								of Korea
							</span>
						</BigSpan>
						<br />
						<MediumSpan>CS CENTER</MediumSpan>
						<SmallSpan>
							<span>shop@bdns.co.kr</span>
							<br />
							<span>하나은행569-910030-89504</span>
							<br />
							<span>070 7739 7799(11:30~17:30)</span>
						</SmallSpan>
					</AddressFrame>
					<CopyRight>
						Copyright © <strong>주식회사비디앤에스</strong>. All rights
						reserved.
					</CopyRight>
					<AnsimImg src={Ansim} />
				</RightHalfInnerFrame>
			</FullInnerFrame>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	width: 100%;
	margin-top: 125px;
	padding-bottom: 8px;

	background-color: #6e6e6e;
`;

const FullInnerFrame = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	width: 90%;
	margin: 0 auto;
	padding-top: 60px;
	padding-bottom: 30px;
	overflow: hidden;
	color: #ffffff;
	font-family: "LatoRegular", "Noto Sans KR";
`;

const LeftHalfInnerFrame = styled.div`
	display: flex;
	width: 50%;
	overflow: hidden;
`;

const RightHalfInnerFrame = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	overflow: hidden;
`;

const QuarterInnerFrame = styled.div`
	width: 25%;
	overflow: hidden;
`;

const SectionTitle = styled.p`
	font-size: 15px;
	margin-bottom: 16px;
`;

const SectionList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

const SectionItem = styled.li`
	margin-bottom: 10px;
	font-size: 13px;
`;

const AddressFrame = styled.div`
	width: 100%;
	font-size: 13px;
	line-height: 24px;
	padding-bottom: 25px;
	letter-spacing: -0.8px;
`;

const BigSpan = styled.span`
	padding-right: 10px;
`;

const MediumSpan = styled.span`
	display: block;
	margin-top: 10px;
`;

const SmallSpan = styled.span`
	padding-right: 4px;
`;

const CopyRight = styled.p`
	font-family: "LatoLight", "Noto Sans KR";
	font-size: 12px;
	line-height: 35px;
	padding-bottom: 5px;
`;

const AnsimImg = styled.img`
	width: 73px;
	position: absolute;
	right: 0;
`;

export default Footer;
