import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "/assets/common/hoonyslogo.png";

const Header = () => {
	return (
		<HeaderContainer>
			<InnerFrame>
				<Link to='/'>
					<HoonysLogo src={Logo} />
				</Link>
				<Navigation>
					<li>
						<Link to='/member/login'>LOGIN</Link>
					</li>
					<li>
						<Link to='/member/join'>JOIN</Link>
					</li>
					<li>
						<Link to='/member/page'>MYPAGE</Link>
					</li>
					<li>
						<Link to='/member/cart'>CART</Link>
					</li>
				</Navigation>
			</InnerFrame>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	width: 100%;
	height: 85px;
	padding: 20px 0;
	box-sizing: content-box;
`;

const InnerFrame = styled.div`
	width: 95%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HoonysLogo = styled.img`
	width: 80px;
	height: auto;
	user-select: none;
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* 인터넷익스플로러 */
	cursor: pointer;
`;

const Navigation = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 27px;
	padding-top: 5px;
	padding-right: 11px;
	list-style: none;
	font-family: "LondrinaSolid";
	font-size: 22px;
`;

export default Header;
