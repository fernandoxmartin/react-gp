import React, { useState } from "react";
import { Hero } from "../Components/Hero";
import { Filter } from "../Components/Filter";
import { useSelector } from "react-redux";
import { Layout } from "../Components/Layout";
import { ProductList } from "../Components/ProductList";
import { accessory_filters } from "../Components/FilterData";
import styled from "styled-components";
import AccessoriesImage from "../Assets/shop-accessories.jpg";

export const Accessories = () => {
  const { filteredAccessories } = useSelector((state) => state.products);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <Layout>
      <Hero title={"Accessories"} image={AccessoriesImage} />
      <ProductsContainer>
        <Filter
          filterList={accessory_filters}
          isFilterOpen={isFilterOpen}
          closeFilter={toggleFilter}
        />
        <ProductList
          products={filteredAccessories}
          section={"accessories"}
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
