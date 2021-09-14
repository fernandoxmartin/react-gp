import React from "react";
import styled from "styled-components";
import { IoStar } from "react-icons/io5";

export const Stars = ({ number }) => {
  return (
    <StarContainer>
      {[...Array(5)].map((star, index) => {
        return (
          <IoStar
            key={index}
            color={index + 1 <= number ? "#202020" : "#b5b5b5"}
          />
        );
      })}
    </StarContainer>
  );
};

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;
