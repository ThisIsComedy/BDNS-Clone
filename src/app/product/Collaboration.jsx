import React, { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import GlobalStyle from "../../styles/global.style";
import styled from "styled-components";
import slideData from "../../db/bdnsCollaborationSliderData.json";
import productData from "../../db/bdnsShopProductData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pagination from "./Pagination";
import ListObject from "../../components/common/ListObject";

const Collaboration = () => {
  const [products, setProducts] = useState(productData);
	const [limits, setLimits] = useState(12);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limits;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>COLLABORATION</Title>
      <StyledSlider {...settings}>
        {slideData.map((value, index) => (
          <Slide key={index}>
            <Image src={value.imageUrl} />
          </Slide>
        ))}
      </StyledSlider>
      <ListContainer>
        {productData
					.slice(offset, offset + limits)
					.map(object => (
						<ListObject 
							key={object.id}
							imgUrl={object.imgUrl}
							name={object.name}
							price={object.price}
							quantity={object.quantity}
						/>
				))}
      </ListContainer>
      <Pagination 
        total={products.length}
        limits={limits}
        page={page}
        setPage={setPage}
      />
      <Footer />
    </>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <PrevButton onClick={onClick}>
      <PrevArrowImage src='/assets/slider/prev.png' />
    </PrevButton>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <NextButton onClick={onClick}>
      <NextArrowImage src='/assets/slider/next.png' />
    </NextButton>
  );
};

const Title = styled.div`
  text-align: center;
  font-size: 34px;
  font-family: "LatoBold", "Noto Sans KR";
  margin: 40px 0px 55px;
`;

const StyledSlider = styled(Slider)`
  width: 90vw;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 55px 65px 55px;
  margin: 0 auto;

  .slick-slide {
    padding: 0 20px;
  }

  .slick-next:before,
  .slick-prev:before {
    display: none;
  }
`;

const PrevButton = styled.button`
  width: 30px;
  position: absolute;
  top: 45%;
  left: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 30px;
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const PrevArrowImage = styled.img`
  width: 100%;
`;

const NextArrowImage = styled.img`
  width: 100%;
`;

const Slide = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const ListContainer = styled.div`
	width: 95%;
	margin: 0 auto;
  margin-top: 60px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export default Collaboration;