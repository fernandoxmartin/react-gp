import React, { useState } from "react";
import { Hero } from "../Components/Hero";
import { Filter } from "../Components/Filter";
import { useSelector } from "react-redux";
import { ProductList } from "../Components/ProductList";
import { guitar_filters } from "../Components/FilterData";
import { Layout } from "../Components/Layout";
import styled from "styled-components";
import GuitarsImage from "../Assets/guitars.jpg";

export const Guitars = () => {
  const { filteredGuitars } = useSelector((state) => state.products);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <Layout>
      <Hero title={"Guitars"} image={GuitarsImage} />
      <ProductsContainer>
        <Filter
          filterList={guitar_filters}
          isFilterOpen={isFilterOpen}
          closeFilter={toggleFilter}
        />
        <ProductList
          products={filteredGuitars}
          section={"guitars"}
          closeFilter={toggleFilter}
        />
      </ProductsContainer>
    </Layout>
  );
};

const ProductsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 4rem 0;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    grid-template-columns: 20% 80%;
  }
`;
