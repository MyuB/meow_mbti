import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/ResultData";
import KakaoShareButton from "./KakaoShareBtn";

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

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  console.log(resultData);

  return (
    <Wrapper>
      <Header>예비 집사 판별기</Header>
      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img
            src={resultData.image}
            className="rounded-circle"
            width={350}
            height={350}
            alt={""}
          ></img>
        </LogoImage>
        <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}</Desc>
        <Desc
          style={{
            marginTop: 10,
          }}
        >
          {resultData.desc}
        </Desc>
        <BtnWrapper>
          <Button onClick={() => navigate("/")}>테스트 다시하기</Button>
          <KakaoShareButton data={resultData} />
        </BtnWrapper>
      </Contents>
    </Wrapper>
  );
};

export default Result;
