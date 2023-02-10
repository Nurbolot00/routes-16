import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductItem from '../components/ProductItem';
import Button from '../components/UI/Button';

const Products = ({products}) => {
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/')
    }
    return (
        <Container>
            <UlProductList>
            {products.map((item,index) =>{
                return(
                    <Link to={`/products/${item.id}/details`} key={index}>
                        <li>
                            <ProductItem img={item.url} title={item.title} price={item.price}/>
                        </li>

                    </Link>
                )
            })}
            </UlProductList>
            <Button onClick={goHome}>Go Back</Button>
        </Container>
    );
};

export default Products;

const UlProductList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    a{
        text-decoration: none;
        color: black;
    }
`

const Container = styled.div`
    width: 100%;
    padding: 20px 40px;
    background-color: #c3cfd9;
`