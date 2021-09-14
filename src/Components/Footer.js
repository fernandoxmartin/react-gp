import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import Logo from "../Assets/logo.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <Info>
          <img src={Logo} alt="logo" />
          <ABC>
            <HiOutlineLocationMarker size={20} />
            <p>
              12345 Guitar Pedal Ave, <br /> Los Angeles, CA 90016
            </p>
          </ABC>
          <ABC>
            <BiPhone size={20} />
            <p>(123) 456 - 7890</p>
          </ABC>
        </Info>
        <Socials>
          <a href="https://instagram.com">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com">
            <FiFacebook size={20} />
          </a>
          <a href="https://twitter.com">
            <FiTwitter size={20} />
          </a>
        </Socials>
      </FooterInfo>
      <p> &copy; Guitar and Pedal. All Rights Reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 40vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.light};
  p {
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    p {
      font-size: 1.3rem;
    }
  }
`;

const FooterInfo = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 70%;
  img {
    filter: invert(100%);
    width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    img {
      width: 45%;
    }
    font-size: 1.3rem;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    cursor: pointer;
  }
`;

const ABC = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  p {
    text-align: left;
    padding-left: 1rem;
  }
`;
