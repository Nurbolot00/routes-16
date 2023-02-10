import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

const MyCart = () => {
    const navigate = useNavigate()
    const goBackHandler = () =>{
        navigate(-1)
    }
    return (
        <Container>
            <CartContainer>My Cart... bla bla bla</CartContainer>
            <Button onClick={goBackHandler}>Go Back</Button>
        </Container>
    );
};

export default MyCart;

const Container = styled.div`
    width: 100%;
    padding: 20px 40px;
    background-color: #c3cfd9;
`

const CartContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
`
