import styled from 'styled-components';
import GlobalStyle from '../styles/global.style';

const Home = () => {
	return (
		<>
			<GlobalStyle />
			<BackGroundImg>
				<LeftSection>
					<LeftInnerSection>
						<LanigiroLogo src='./assets/common/lanigirologo.png'/>
						<MenuBanner>
							<MenuBannerDiv>SHOP</MenuBannerDiv>
							<MenuBannerShadow>SHOP</MenuBannerShadow>
						</MenuBanner>
						<MenuBanner>
							<MenuBannerDiv>ROOM</MenuBannerDiv>
							<MenuBannerShadow>ROOM</MenuBannerShadow>
						</MenuBanner>
						<MenuBanner>
							<MenuBannerDiv>PROGRAMS</MenuBannerDiv>
							<MenuBannerShadow>PROGRAMS</MenuBannerShadow>
						</MenuBanner>
						<MenuBanner>
							<MenuBannerDiv>ABOUT LANI</MenuBannerDiv>
							<MenuBannerShadow>ABOUT LANI</MenuBannerShadow>
						</MenuBanner>
					</LeftInnerSection>
					<LeftInnerSection>
						<BdnsLogo src='./assets/common/bdnslogo.png'/>
						<MenuBanner>
							<MenuBannerDiv>SHOP</MenuBannerDiv>
							<MenuBannerShadow>SHOP</MenuBannerShadow>
						</MenuBanner>
						<MenuBanner>
							<MenuBannerDiv>COLLABORATION</MenuBannerDiv>
							<MenuBannerShadow>COLLABORATION</MenuBannerShadow>
						</MenuBanner>
						<MenuBanner>
							<MenuBannerDiv>ABOUT</MenuBannerDiv>
							<MenuBannerShadow>ABOUT</MenuBannerShadow>
						</MenuBanner>
						<ShortcutsList>LOGIN • JOIN • MYPAGE • CART</ShortcutsList>
						<ShortcutsList>INSTAGRAM • YOUTUBE</ShortcutsList>
					</LeftInnerSection>
				</LeftSection>
				<RightSection>
					<LanigiroResort>
						<LanigiroResortTitle>LANIGIRO RESORT</LanigiroResortTitle>
						<LanigiroResortSub>by BDNS</LanigiroResortSub>
					</LanigiroResort>
					<OgamManjok>오감이 만족하는 안식처</OgamManjok>
				</RightSection>
			</BackGroundImg>
		</>
	);
};

const BackGroundImg = styled.div`
	width: 100vw;
	height: 100vh;
	color: white;
	background-image: url('./assets/home/background.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: row;
`;

const LeftSection = styled.div`
	width: 50%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
`;

const LeftInnerSection = styled.div`
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LanigiroLogo = styled.img`
	width: 175px;
	height: 41px;
	margin-bottom: 20px;
`;

const BdnsLogo = styled.img`
	width: 175px;
	height: 61px;
	margin-bottom: 20px;
`;

const MenuBanner = styled.div`
	position: relative;
`;

const MenuBannerDiv = styled.a`
	position: relative;
	font-size: 32px;
	font-family: KOMTITP;
	z-index: 999;
`

const MenuBannerShadow = styled.span`
	width: 200px;
	position: absolute;
	color: black;
	font-size: 32px;
	font-family: KOMTITP;
	left: 6px;
	top: 5px;
`;

const ShortcutsList = styled.span`
	color: black;
	font-family: 'Londrina Solid', cursive;
	font-size: 24px;
	word-spacing: 3px;
	margin-top: 12px;
`;

const RightSection = styled.div`
	width: 50%;
	height: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const LanigiroResort = styled.div`
	width: 85%;
	height: 223px;
	margin-left: auto;
	font-family: 'Georgia';
	background-color: #001149;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 0px 0px 0px 150px;
`;

const LanigiroResortTitle = styled.h2`
	font-size: 44px;
`;

const LanigiroResortSub = styled.h5`
	font-size: 20px;
	margin-top: 30px;
`;

const OgamManjok = styled.div`
	width: 70%;
	height: 138px;
	font-size: 34px;
	font-family: 'Nanum Myeongjo', serif;
	background-color: #001149;
	position: absolute;
	bottom: 75px;
	right: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Home;