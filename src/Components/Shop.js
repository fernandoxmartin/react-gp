import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import guitars from "../Assets/shop-guitars.jpg";
import pedals from "../Assets/shop-pedals.jpg";
import accessories from "../Assets/shop-accessories.jpg";

export const Shop = () => {
  return (
    <ShopContainer>
      <ShopSection>
        <img src={guitars} alt={"guitars"} />
        <Link to="/products/guitars">Shop Guitars</Link>
      </ShopSection>
      <ShopSection>
        <img src={pedals} alt={"pedals"} />
        <Link to="/products/pedals">Shop Pedals</Link>
      </ShopSection>
      <ShopSection>
        <img src={accessories} alt={"accessories"} />
        <Link to="/products/accessories">Shop Accessories</Link>
      </ShopSection>
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ShopSection = styled.div`
  width: 100%;
  height: 200px;
  margin: 1rem 0;
  position: relative;
  border-radius: 5px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    z-index: -1;
    object-fit: cover;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.button};
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1;
    letter-spacing: 1px;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    margin: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    height: 300px;
    img {
      height: 300px;
    }
  }
`;
