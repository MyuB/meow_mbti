import React from "react";
import styled from "styled-components";
import PangImage from "../assets/ggompang.jpeg";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header>예비 집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은??</Title>
        <LogoImage>
          <img
            src={PangImage}
            className="rounded-circle"
            width={350}
            height={350}
            alt={""}
          ></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
