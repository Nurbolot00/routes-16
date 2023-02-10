import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Details = ({ products }) => {
  const { id } = useParams();
  console.log(typeof +id);
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  console.log(item);
  console.log(products);

  const goBackToProductsHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    const chosenItem = products.find((item) => item.id === Number(id));
    return setItem(chosenItem);
  }, [id, products]);

  return (
    <Container>
      <div><img src={item.url} alt={item.title} /></div>

      <div>
        <h2>{item.title}</h2>
        <p>
          <b>Price:</b>${item.price}
        </p>
        {/* <p>{item}</p> */}
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
`;
