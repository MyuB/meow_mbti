import React from "react";
import styled from "styled-components";
import PangImage from "../assets/ggompang.jpeg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/ResultData";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "BMHANNA";
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "BMHANNA";
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
const Result = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>예비 집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={ResultData[0].image}
            className="rounded-circle"
            width={350}
            height={350}
            alt={""}
          ></img>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}/</Desc>
        <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
