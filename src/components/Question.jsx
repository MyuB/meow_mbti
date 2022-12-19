import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/QuestionData";
import { useNavigate, createSearchParams } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30pt;
  text-align: center;
  font-family: "BMHANNA";
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "BMHANNA";
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickButton = (n, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + n } : s
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) setQuestionNo(questionNo + 1);
    else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonWrapper>
        <Button
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginLeft: "20px",
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Question;
