import React, { useState } from 'react';
import { styled } from 'styled-components';
import data from '../../db/bdnsShopProductData.json';
import GlobalStyle from '../../styles/global.style';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ListObject from '../../components/common/ListObject';
import Pagination from './Pagination';

const ProductList = () => {

	const [products, setProducts] = useState(data);
	const [limits, setLimits] = useState(12);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limits;

	return (
		<>
			<GlobalStyle />
			<Header/>
			<TitleDiv>SHOP</TitleDiv>
			<ListContainer>
				{products
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
	font-family: 'LatoBold','Noto Sans KR';
	margin: 40px 0px 55px;
`;

export default ProductList;