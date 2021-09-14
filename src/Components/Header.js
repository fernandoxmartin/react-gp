import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Logo from "../Assets/logo.png";
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isTabOpen, setTabOpen] = useState(false);
  const { qty } = useSelector((state) => state.cart);

  const toggleTab = () => {
    setTabOpen(!isTabOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Link to={"/"}>
          <img src={Logo} alt="logo" width={150} height={40} />
        </Link>

        <HamburgerButton>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </HamburgerButton>
        <DesktopNav>
          <DropDownButton>
            <Link to={"/products"}>
              <h1>Products</h1>
            </Link>
            <DropDownOptions>
              <Link to={"/products/guitars"}>Guitars</Link>
              <Link to={"/products/pedals"}>Pedals</Link>
              <Link to={"/products/accessories"}>Accessories</Link>
            </DropDownOptions>
          </DropDownButton>
          <Link to={"/services"}>
            <h1>Services</h1>
          </Link>
          <Link to={"/support"}>
            <h1>Support</h1>
          </Link>
          <Link to={"/cart"}>
            <h1>Cart</h1>
            <CartQty>{qty}</CartQty>
          </Link>
        </DesktopNav>
      </HeaderContainer>
      <MobileNav open={isOpen}>
        <NavLinks>
          <DropDown onClick={toggleTab}>
            <ProductsLink>
              <h1>Products</h1>
              <DropArrow isOpen={isTabOpen}>
                <FaAngleDown size={20} />
              </DropArrow>
            </ProductsLink>
            <ProductsLinks isOpen={isTabOpen}>
              <Link to={"/products/guitars"}>
                <h2>Guitars</h2>
              </Link>
              <Link to={"/products/pedals"}>
                <h2>Pedals</h2>
              </Link>
              <Link to={"/products/accessories"}>
                <h2>Accessories</h2>
              </Link>
            </ProductsLinks>
          </DropDown>

          <Link to={"/services"}>
            <h1>Services</h1>
          </Link>
          <Link to={"/support"}>
            <h1>Support</h1>
          </Link>
          <Link to={"/cart"}>
            <h1>Cart</h1>
            <CartQty>{qty}</CartQty>
          </Link>
        </NavLinks>
      </MobileNav>
    </>
  );
};

const HeaderContainer = styled.header`
  height: 15vh;
  width: 90%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MobileNav = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transition: 0.3s ease;
  transform: translateX(${({ open }) => (open ? "0%" : "-100%")});
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  z-index: 10;
  padding-top: 15vh;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: none;
  }
`;

const NavLinks = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CartQty = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 0.5rem;
`;

const DropArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  transition: 0.5s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const ProductsLink = styled.div`
  display: flex;
`;

const ProductsLinks = styled.div`
  transition: 0.5s ease;
  overflow: hidden;
  height: ${(props) => (props.isOpen ? "auto" : "0")};
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
`;

const HamburgerButton = styled.div`
  z-index: 20;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: none;
  }
`;

const DesktopNav = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: flex;
    width: 450px;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark};
      font-size: 0.8rem;
      transition: 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const DropDownOptions = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.dark};
  a {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
  }
  &:hover {
    display: block;
  }
`;
const DropDownButton = styled.div`
  position: relative;
  a {
    &:hover + ${DropDownOptions} {
      display: block;
    }
  }
`;
