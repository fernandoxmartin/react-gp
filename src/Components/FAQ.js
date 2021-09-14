import React, { useState } from "react";
import styled from "styled-components";

export const FAQ = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Question onClick={() => setOpen(!isOpen)}>
        <h3>{question}</h3>
      </Question>
      {isOpen && (
        <Answer isOpen={isOpen}>
          <p>{answer}</p>
        </Answer>
      )}
    </>
  );
};

const Question = styled.div`
  height: 3rem;
  width: 100%;
  background: #dedede;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  h3 {
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-size: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 80%;
  }
`;
const Answer = styled.div`
  max-height: ${(props) => (props.isOpen ? "150px" : "0")};
  min-height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: 0.5s ease-in-out;

  p {
    padding: 2rem;
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-size: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 80%;
  }
`;
