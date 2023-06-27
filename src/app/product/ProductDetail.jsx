import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/bdnsShopProductData.json";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import GlobalStyle from "../../styles/global.style";
import OptionList from "../../components/productdetail/OptionList";

const ProductDetail = () => {
	const { id } = useParams();
	const [products, setProducts] = useState(data);

	return (
		<>
			<GlobalStyle />
			<Header />
			<Wrap>
				<Container>
					<ProductSection>
						<DetailArea>
							<ImgArea>
								<Thumbnail>
									<ThumbnailImg src={products[`${id - 1}`].imgUrl} />
								</Thumbnail>
							</ImgArea>
							<InfoArea>
								<Summary>
									<ProductName>{products[`${id - 1}`].name}</ProductName>
									<PrductPrice>{products[`${id - 1}`].price}</PrductPrice>
								</Summary>
								<OptionList id={id - 1} />
							</InfoArea>
						</DetailArea>
					</ProductSection>
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
	top: 35px;
`;

const Container = styled.div`
	width: 95%;
	margin: 0 auto;
`;

const ProductSection = styled.div`
	position: relative;
	margin: 0 auto;
	padding: 0px;
`;

const DetailArea = styled.div`
	padding: 0px;
	overflow: hidden;
	font-family: "LatoBold", "Noto Sans KR";
`;

const ImgArea = styled.div`
	display: flex;
	justify-content: center;
	float: left;
	width: 65%;
	margin: 0;
	padding: 0px;
	border: 1px solid red;
`;

const Thumbnail = styled.div`
	display: inline-block;
	position: relative;
	max-width: 100%;
`;

const ThumbnailImg = styled.img`
	width: 100%;
`;

const InfoArea = styled.div`
	float: right;
	width: 28%;
	position: fixed;
	background: #fff;
	right: 2.5%;
	z-index: 999;
	transition: all 0.5s ease;
	padding-top: 2%;
	border: 1px solid blue;
`;

const Summary = styled.div`
	font-size: 12px;
	margin: 10px 0 0;
	box-sizing: border-box;
`;

const ProductName = styled.div`
	font-size: 24px !important;
	color: #000;
	font-weight: 600;
	padding: 3px 6px 12px 0;
	box-sizing: content-box;
`;

const PrductPrice = styled.div`
	font-size: 16px;
	color: #000;
	padding: 3px 6px 2px 0;
	font-family: "LatoRegular", "Noto Sans KR";
`;

export default ProductDetail;
