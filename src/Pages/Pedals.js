import React, { useState } from "react";
import { Hero } from "../Components/Hero";
import { Filter } from "../Components/Filter";
import { useSelector } from "react-redux";
import { Layout } from "../Components/Layout";
import { ProductList } from "../Components/ProductList";
import { pedal_filters } from "../Components/FilterData";
import styled from "styled-components";
import PedalsImage from "../Assets/shop-pedals.jpg";

export const Pedals = () => {
  const { filteredPedals } = useSelector((state) => state.products);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <Layout>
      <Hero title={"Pedals"} image={PedalsImage} />
      <ProductsContainer>
        <Filter
          filterList={pedal_filters}
          isFilterOpen={isFilterOpen}
          closeFilter={toggleFilter}
        />
        <ProductList
          products={filteredPedals}
          section={"pedals"}
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
