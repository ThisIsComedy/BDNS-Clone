import styled from 'styled-components';

const MenuBanner = ({ value }) => {
  return (
    <>
      <MenuBannerContainer>
        <MenuBannerBtn>{value}</MenuBannerBtn>
        <MenuBannerShadow>{value}</MenuBannerShadow>
      </MenuBannerContainer>
    </>
  );
};

const MenuBannerContainer = styled.div`
	position: relative;
`;

const MenuBannerBtn = styled.a`
	position: relative;
	font-size: 32px;
	font-family: KOMTITP;
	z-index: 999;
`;

const MenuBannerShadow = styled.span`
	width: 200px;
	position: absolute;
	color: black;
	font-size: 32px;
	font-family: KOMTITP;
	left: 6px;
	top: 5px;
`;

export default MenuBanner;