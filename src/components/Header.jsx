import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <h2 style={{color: 'white', fontSize: '26px'}}>StoreLogo</h2>
            <StyledNav>
                <StyledList>
                    <NavLink to='/products' style={({isActive}) => ({
                        color: isActive ? "black" : "white",
                    })}>Products</NavLink>
                    <NavLink to='/myCart' style={({isActive}) => ({
                        color: isActive ? "black" : "white",
                    })}>My Cart</NavLink>
                    <NavLink to='/myOrders' style={({isActive}) => ({
                        color: isActive ? "black" : "white",
                    })}>My Orders</NavLink>
                </StyledList>
            </StyledNav>

        </Container>
    );
};

export default Header;


const Container = styled.header`
    background-color: #2596be;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
`

const StyledNav = styled.nav`
    width: 40%;
    color: #fff;
    display: flex;
    font-size: 20px;
`

const StyledList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
`