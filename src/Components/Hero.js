import React from "react";
import styled from "styled-components";

export const Hero = ({ image, title }) => {
  return (
    <HeroContainer bg={image}>
      <h1>{title}</h1>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-bottom: 2rem;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.bg});
  background-position: center;
  background-size: cover;

  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
    color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    h1 {
      font-size: 4rem;
    }
    height: 40vh;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    height: 45vh;
  }
`;
