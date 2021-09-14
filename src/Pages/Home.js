import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { FeaturedList } from "../Components/FeaturedList";
import { Offers } from "../Components/Offers";
import { Shop } from "../Components/Shop";
import { useSelector } from "react-redux";
import frontPageImage from "../Assets/hero.jpg";

export const Home = () => {
  const { bestSellers, featured } = useSelector((state) => state.products);

  return (
    <Layout>
      <Hero>
        <HeroLeft>
          <LeftTop>
            <h1>Explore Your Creativity</h1>
            <SubHeader>
              <h3>Create Your Own Perfect Combination</h3>
              <h3>Create Your Sound</h3>
            </SubHeader>
          </LeftTop>
          <LeftBottom>
            <Link to="/products">View Products</Link>
          </LeftBottom>
        </HeroLeft>
        <HeroRight />
      </Hero>
      <FeaturedList section="best sellers" products={bestSellers} />
      <FeaturedList section="featured" products={featured} />
      <Offers />
      <Shop />
    </Layout>
  );
};

const Hero = styled.div`
  width: 90%;
  height: 35vh;
  position: relative;
  margin: 3rem auto;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    height: 45vh;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    height: 60vh;
  }
`;
const HeroLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  white-space: nowrap;
  overflow: auto;
  color: #111;
`;
const HeroRight = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  background-image: url(${frontPageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
    width: 100%;
  }
`;
const SubHeader = styled.div`
  margin: 20px 0px 20px 0px;
`;
const LeftTop = styled.div`
  background: linear-gradient(to right, #000 50%, #fff 50%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
  h3 {
    font-size: ${({ theme }) => theme.sizes.sm};
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    h1 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    h1 {
      font-size: 6.8rem;
    }
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    h1 {
      font-size: 8.5rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;
const LeftBottom = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.button};
    border-radius: 3px;
    padding: 10px;
    letter-spacing: 1px;
  }
`;
