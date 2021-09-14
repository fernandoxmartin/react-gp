import React from "react";
import { FeaturedList } from "../Components/FeaturedList";
import { useSelector } from "react-redux";
import { Hero } from "../Components/Hero";
import { Layout } from "../Components/Layout";
import ProductsImage from "../Assets/products.jpg";

export const Products = () => {
  const { guitars, pedals, accessories } = useSelector(
    (state) => state.products
  );

  return (
    <Layout>
      <Hero title={"Products"} image={ProductsImage} />
      <FeaturedList products={guitars.slice(0, 4)} section="guitars" />
      <FeaturedList products={pedals.slice(0, 4)} section="pedals" />
      <FeaturedList products={accessories.slice(0, 4)} section="accessories" />
    </Layout>
  );
};
