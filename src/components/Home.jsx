import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const Home = () => {
  return (
    <Wrapper>
      <Header>예비 집사 판별기</Header>
      <Title>나에게 맞는 주인님은??</Title>
    </Wrapper>
  );
};

export default Home;
