import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Details = ({ products }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [item, setItem] = useState({});


  const goBackToProductsHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    const chosenItem = products.find((item) => item.id === Number(id));
    return setItem(chosenItem);
  }, [id, products]);

  return (
    <Container>
        <ItemWrapper>
      <ImageContainer>
        <img src={item.url} alt={item.title} />
        </ImageContainer>

      <InfoContainer>
        <h2>Name: {item.title}</h2>
        <p>
          <b>Price:</b>  ${item.price}
        </p>
        <p> <b>Description: </b>{item.description}</p>
      </InfoContainer>
      </ItemWrapper>
      <Button onClick={goBackToProductsHandler}>Go Back</Button>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: #c3cfd9;
`;

const ItemWrapper = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    border-radius: 10px;
`
const ImageContainer = styled.div`
    width: 300px;
    img{
        width: 100%;
    }
`

const InfoContainer = styled.div`
    width: 70%;
`