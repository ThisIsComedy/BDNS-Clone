import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ListObject = ({ id, imgUrl, name, price, quantity }) => {
  return (
    <Link to={`/bdns/shop/${id}`}>
      <ObjectContainer>
        <ProductImage src={imgUrl}/>
        <ProductNameSpan>
          <ProductNameLink>{name}</ProductNameLink>
        </ProductNameSpan>
        <ProductPriceSpan>
          <ProductPrice>{price}</ProductPrice>
        </ProductPriceSpan>
        <ProductSoldoutDiv>
          { !quantity ? <img src='/assets/product_list/sold_out.jpg' /> : null }
        </ProductSoldoutDiv>
      </ObjectContainer>
    </Link>
  );
};

const ObjectContainer = styled.div`
  margin: 20px 12px 30px;
`;

const ProductImage = styled.img`
  width: 900px;
  max-width: 100%;
  margin-bottom: 10px;
`;

const ProductNameSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductNameLink = styled.a`
  font-family: 'LatoRegular','Noto Sans KR';
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const ProductPriceSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductSoldoutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ProductPrice = styled.span`
  font-family: 'LatoRegular','Noto Sans KR';
`;

export default ListObject;