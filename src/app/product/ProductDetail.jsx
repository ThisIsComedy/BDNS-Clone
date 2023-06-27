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
					<ProductAdditional>
						<PrdDetail>
							<DetailContent>
								{products[`${id - 1}`].detailImg.map(imgUrl => (
									<DetailImg src={imgUrl} alt={imgUrl} />
								))}
							</DetailContent>
						</PrdDetail>
						<PrdInfo>
							<InfoContent>
								<InfoContentTitle>상품결제정보</InfoContentTitle>
								<p>
									무통장입금으로 주문 시 입력한 입금자명과 실제 입금자명이 반드시 일치해야 하며,<br/>
									주문시간 기준 4시간 이내 미입금 시 자동으로 주문 취소됩니다.<br/>
									<br/>
									동명이인의 입금자와 입금액이 같을 경우 자동 입금확인이 어려우며 입금확인이 늦어질 수 있습니다.<br/>
									입금확인이 늦어질 경우 카카오톡 채널 'BDNS'로 문의주시면 확인처리 도와드리겠습니다.<br/>
									<br/>
									고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인 과정에서 도난카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.
								</p>
								<InfoContentTitle>배송정보</InfoContentTitle>
								<p>
								배송 방법 : 택배<br/>
								배송 지역 : 전국지역<br/>
								배송 비용 : ₩3,000<br/>
								배송 기간 : 2일 ~ 7일<br/>
								배송 안내 :<br/>
								-지정 택배사는 CJ대한통운이며, 10만원 이상 구매시 무료배송입니다.<br/>
								-무료배송 상품을 포함한 주문건은 무료로 배송됩니다.<br/>
								-주문완료 이후 지정된 배송 시작일부터 순차적으로 출고됩니다.<br/>
								-제주 도서 산간지역 추가배송비 5000원이 부과됩니다.<br/>
								-제품의 택 제거, 정품 패키지 훼손,착용 흔적 및 오염 등의 상품 가치가 훼손된 경우 교환 환불 불가합니다.<br/>
								-주식회사 비디앤에스 cs센터 : 070-7739-7799<br/>
								</p>
								<InfoContentTitle>교환 및 반품정보</InfoContentTitle>
								<p>
									교환 및 반품 주소<br/>
									 - [10011] 경기도 김포시 하성면 월하로705번길 35-43 한승스토리지<br/>
									 <br/>
									교환 및 반품 안내<br/>
									-교환 반품 가능한 기간은 제품 수령 후 7일입니다.<br/>
									-교환 반품 관련 문의는 QnA게시판이나 카카오톡 'BDNS'채널로 문의주세요.<br/>
									-한정수량 제작된 상품의 경우 불량 상품을 제외한 교환은 어렵습니다.<br/>
									-프리오더 주문건, 주문제작 상품의 경우 선 주문, 후 제작 상품으로 주문취소가 불가하며 불량상품을 제외한 단순변심 교환,<br/>
									환불은 어려운 점 양해 부탁드립니다.<br/>
									-반품비용 결제 방법 :계좌입금 / 결제대금차감<br/>
									-반품비용 :3000원, 무료배송 상품의 경우 왕복배송비 6000원<br/>
									-반품비용 입금계좌 : 하나은행 / 주식회사비디앤에스 / 569-910030-89504<br/>
									<br/>
									교환 및 환불 유의사항<br/>
									-제품의 택 제거, 정품 패키지 훼손,착용 흔적 및 오염 등의 상품 가치가 훼손된 경우 교환 환불 불가합니다.<br/>
									-주식회사 비디앤에스 cs센터 : 070-7739-7799<br/>
									<br/>
									<br/>
								</p>
								<InfoContentTitle>서비스문의</InfoContentTitle>
								<p>
									자세한 문의사항은 QnA게시판이나 BDNS 카카오톡 채널로 문의주시면 빠른 답변 드리겠습니다.
								</p>
							</InfoContent>
						</PrdInfo>
					</ProductAdditional>
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

const ProductAdditional = styled.div`
	margin: 0;
	padding: 0;
`;

const PrdDetail = styled.div`
	width: 65%;
	position: relative;
`;

const DetailContent = styled.div`
	padding: 100px 10px 46px 9px;
	color: #353535;
	line-height: 18px;
	text-align: center;
	box-sizing: border-box;
`;

const DetailImg = styled.img`
	display: block;
	margin: 0 auto;
	text-align: center;
	max-width: 100% !important;
	height: auto !important;
	width: 1000px;
`;

const PrdInfo = styled.div`
	width: 42%;
	left: 10%;
	position: relative;
	font-family: "LatoRegular", "Noto Sans KR";
`;

const InfoContent = styled.div`
	font-size: 13px;
	font-weight: 300;
`;

const InfoContentTitle = styled.h3`
	margin: 20px 0 20px;
	color: #444;
	font-size: 12px;
	font-family: "LatoBold", "Noto Sans KR";
`;

export default ProductDetail;
