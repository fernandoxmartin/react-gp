import React from "react";
import styled from "styled-components";
import { FiTruck } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export const Offers = () => {
  return (
    <OffersContainer>
      <Offer>
        <FiTruck size={30} />
        <h3>Free Shipping</h3>
        <h4>On All Orders</h4>
      </Offer>
      <Offer>
        <AiOutlineTags size={30} />
        <h3>Lowest Prices</h3>
        <h4>Guarenteed</h4>
      </Offer>
      <Offer>
        <BsArrowCounterclockwise size={30} />
        <h3>30-Day Returns</h3>
        <h4>Hassle Free</h4>
      </Offer>
      <Offer>
        <FaRegCreditCard size={30} />
        <h3>Finance</h3>
        <h4>Monthly Payments</h4>
      </Offer>
      <Offer>
        <BiSupport size={30} />
        <h3>Support</h3>
        <h4>Ask Our Experts</h4>
      </Offer>
    </OffersContainer>
  );
};

const OffersContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 2rem 0;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    justify-content: space-around;
    width: 80%;
    padding: 5rem 0;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    padding: 7rem 0;
  }
`;

const Offer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  h3 {
    font-size: ${({ theme }) => theme.sizes.sm};
  }
  h4 {
    font-size: ${({ theme }) => theme.sizes.xs};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
`;
