import styled from 'styled-components';
import GlobalStyle from '../styles/global.style';
import MenuBanner from '../components/home/MenuBanner';
import Footer from '../components/common/Footer';

const Home = () => {
	return (
		<>
			<GlobalStyle />
			<BackGroundImg>
				<LeftSection>
					<LeftInnerSection>
						<LanigiroLogo src='./assets/common/lanigirologo.png' alt='Lanigiro Logo' />
						<MenuBanner value = "SHOP" />
						<MenuBanner value = "ROOM" />
						<MenuBanner value = "PROGRAMS" />
						<MenuBanner value = "ABOUT LANI" />
					</LeftInnerSection>
					<LeftInnerSection>
						<BdnsLogo src='./assets/common/bdnslogo.png' alt='BDNS Logo' />
						<MenuBanner value = "SHOP" />
						<MenuBanner value = "COLLABORATION" />
						<MenuBanner value = "ABOUT" />
						<ShortcutsList>
							<a href='#'>LOGIN</a> • <a href='#'>JOIN</a> • <a href='#'>MYPAGE</a> • <a href='#'>CART</a>
						</ShortcutsList>
						<ShortcutsList>
							<a 
								href='https://www.instagram.com/bdnspresents/'
								target='_blank'
								rel="noreferrer"
							>INSTAGRAM</a> • <a
								href='https://www.youtube.com/channel/UC5xLohcPE65Y-U62X6snmRQ'
								target='_blank'
								rel='noreferrer'
							>YOUTUBE</a>
						</ShortcutsList>
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
			<Footer />
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
	margin-bottom: -125px;
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

const ShortcutsList = styled.span`
	color: black;
	font-family: 'LondrinaSolid';
	font-size: 20px;
	word-spacing: 30px;
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