import React from 'react';
import styled from 'styled-components';

const ProductItem = ({img,title,price}) => {
    return (
        <ProductCard>

            <ImageContainer>
                <img src={img} alt="" />
            </ImageContainer>

            <ProductInfo>
                <h3>{title}</h3>
                <h4>${price}</h4>
            </ProductInfo>

        </ProductCard>
    );
};

export default ProductItem;

const ProductCard = styled.div`
    width: 300px;
    height: 25rem;
    background-color: white;
    padding: 20px;
    border-radius: 12px;

`

const ImageContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ;
    img{
        width: 100%;
    }
`

const ProductInfo = styled.div`
    padding: 0 30px;
`
