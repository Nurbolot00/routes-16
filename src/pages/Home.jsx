import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHomeContainer>
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/925/820/original/colorful-welcome-design-template-free-vector.jpg"
        alt="welcome"
      />
    </StyledHomeContainer>
  );
};

export default Home;

const StyledHomeContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;
