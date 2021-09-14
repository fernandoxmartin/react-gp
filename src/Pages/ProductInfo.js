import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../Components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { Stars } from "../Components/Stars";
import { addToCart } from "../Redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductInfo = () => {
  const params = useParams();
  const { [params.product]: list } = useSelector((state) => state.products);
  const product = list.find((item) => item.id === parseInt(params.id));
  const dispatch = useDispatch();

  const onAddClick = (e) => {
    dispatch(addToCart(e));
    toast.success("Successfully Added to Cart");
  };

  return (
    <Layout>
      <ProductContainer>
        <ProductImage>
          <img
            src={require(`../Assets/${product.product}/${product.img}`).default}
            alt={product.name}
          />
        </ProductImage>
        <ProductDetails>
          <h1>{product.name}</h1>
          <h1>
            <sup>$</sup>
            {product.price.toString().slice(0, -3)}
            <sup>{product.price.toString().slice(-3)}</sup>
          </h1>
          <Stars number={product.stars} />
          <AddButton onClick={() => onAddClick(product)}>Add To Cart</AddButton>
          <Overview>
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Overview>
          <Specs>
            <h2>Specifications</h2>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>sit amet, consectetur</li>
              <li>sed do eiusmod tempor</li>
            </ul>
          </Specs>
        </ProductDetails>
      </ProductContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
};

const ProductContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: auto;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    grid-template-columns: 1fr 1fr;
    margin: 4rem 0;
  }
`;
const ProductImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    img {
      width: 50%;
    }
  }
`;
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
  h1 {
    font-size: ${({ theme }) => theme.sizes.lg};
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const Overview = styled.div`
  align-self: flex-start;

  p {
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-size: ${({ theme }) => theme.sizes.xs};
    padding-left: 1rem;
    margin: 1rem 0;
  }
`;
const Specs = styled.div`
  align-self: flex-start;
  ul {
    padding-left: 1rem;
    list-style-position: inside;
    margin: 1rem 0;
    li {
      font-family: ${({ theme }) => theme.fonts.alternate};
      font-size: ${({ theme }) => theme.sizes.xs};
    }
  }
`;
const AddButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.button};
  color: #fff;
  border: none;
  padding: 0.8rem;
  margin: 2rem 0;
  letter-spacing: 1px;
  &:active {
    background: blue;
  }
`;
