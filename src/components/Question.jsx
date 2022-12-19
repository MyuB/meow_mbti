import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/QuestionData";

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
  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={80}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[0].title}</Title>
      <ButtonWrapper>
        <Button style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>
          {QuestionData[0].answera}
        </Button>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "15pt",
            marginLeft: "20px",
          }}
        >
          {QuestionData[0].answerb}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Question;
