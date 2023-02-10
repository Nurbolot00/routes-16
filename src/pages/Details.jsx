import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';

const Details = ({products}) => {
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()

    const [item,setItem] = useState({})
    console.log(item)

    const goBackToProductsHandler = () =>{
        navigate(-1)
    }

    useEffect(() => {
        const chosenItem = products.find((item) => {
            console.log(item)
             return item.id === id
        })
        console.log(chosenItem)
        return setItem(chosenItem)
    },[products,id])
    return (
        <Container>
            <div>
                <img src={item} alt={item} />
            </div>

            <div>
                <h2>{item}</h2>
                <p><b>Price:</b>${item}</p>
                <p>{item}</p>
            </div>
            <Button onClick={goBackToProductsHandler}>Go Back</Button>
        </Container>
    );
};

export default Details;

const Container = styled.div`
     width: 100%;
    padding: 20px 40px;
    background-color: #c3cfd9;
`