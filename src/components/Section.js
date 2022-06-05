import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Container bgImage={backgroundImg}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
        </Fade>
        <Fade bottom delay={700}>
          <p>{description}</p>
        </Fade>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <Fade left delay={700}>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          {rightBtnText && (
            <Fade right delay={700}>
              <RightButton>{rightBtnText}</RightButton>{" "}
            </Fade>
          )}
        </ButtonGroup>
        <Fade top delay={900}>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 25px;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 264px;
  color: #f3f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  opacity: 0.95;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 12px;
`;
const RightButton = styled(LeftButton)`
  background-color: rgba(244, 244, 244, 0.65);
  color: #393c41;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 33px;
  overflow-x: hidden;
  animation: animateDownArrow 1.5s infinite;
`;