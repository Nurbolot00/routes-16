import React from 'react';
import styled from 'styled-components';

const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;


const StyledButton = styled.button`
    padding: 0.8rem 1.5rem;
    background-color: #2ea980;
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 22px;
    margin: 0.5rem;
`