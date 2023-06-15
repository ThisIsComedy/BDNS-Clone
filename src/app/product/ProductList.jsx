import React from 'react';
import GlobalStyle from '../../styles/global.style';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { styled } from 'styled-components';
import ListObject from '../../components/common/ListObject';
import data from '../../db/bdnsShopProductData.json';

const ProductList = () => {
	return (
		<>
			<GlobalStyle />
			<Header/>
			<TitleDiv>SHOP</TitleDiv>
			<ListContainer>
				{data.map(object => (
					<ListObject 
						key={object.id}
						imgUrl={object.imgUrl}
						name={object.name}
						price={object.price}
					/>
				))}
			</ListContainer>
			<Footer/>
		</>
	);
};

const ListContainer = styled.div`
	width: 95%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const TitleDiv = styled.div`
	text-align: center;
	font-size: 34px;
	font-family: 'LatoRegular','Noto Sans KR';
	font-weight: bold;
	margin: 35px 0px 45px;
`;

export default ProductList;