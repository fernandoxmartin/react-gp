import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Stars } from "./Stars";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../Redux/actions";

export const ProductList = ({ section, products, closeFilter }) => {
  const { filters } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(await filterProducts(filters, section));
  }, [filters, section, dispatch]);

  return (
    <ListContainer>
      <ListHeader>
        <h2>{section}</h2>
        <button type="button" onClick={() => closeFilter()}>
          Filter
        </button>
      </ListHeader>
      <List>
        {products &&
          products.map((product) => {
            return (
              <Product key={product.id}>
                <Link to={`/products/${product.product}/` + product.id}>
                  <img
                    src={
                      require(`../Assets/${product.product}/${product.img}`)
                        .default
                    }
                    alt={product.name}
                  />
                </Link>
                <h3>{product.name}</h3>
                <h3>
                  ${product.price.toString().slice(0, -3)}
                  <sup>{product.price.toString().slice(-3)}</sup>
                </h3>
                <Stars number={product.stars} />
              </Product>
            );
          })}
      </List>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    grid-template-rows: auto 90%;
  }
`;
const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
  padding-bottom: 1rem;
  h2 {
    font-size: ${({ theme }) => theme.sizes.md};
  }
  button {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    border-radius: 3px;
    padding: 2px 10px;
    font-family: ${({ theme }) => theme.fonts.button};
    font-size: ${({ theme }) => theme.sizes.button};
    letter-spacing: 1px;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    height: 50px;
    button {
      display: none;
    }
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Product = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem;
  img {
    width: 7rem;
  }
  h3 {
    font-size: ${({ theme }) => theme.sizes.sm};
    padding: 0.5rem 0;
    text-align: center;
    &:nth-child(3) {
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.sizes.md};
    }
  }
`;
