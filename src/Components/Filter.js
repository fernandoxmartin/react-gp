import React from "react";
import styled from "styled-components";
import { Stars } from "./Stars";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, updateSort } from "../Redux/actions";

export const Filter = ({ filterList, isFilterOpen, closeFilter }) => {
  const dispatch = useDispatch();
  const { sort, category, brand, price, rating } = useSelector(
    (state) => state.filters
  );
  return (
    <FilterContainer open={isFilterOpen}>
      <CloseButton onClick={() => closeFilter()}>
        <CgClose size={25} />
      </CloseButton>
      <FilterSection>
        <h2>Sort By</h2>
        <select value={sort} onChange={(e) => dispatch(updateSort(e.target))}>
          <option value="best">Best Selling</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </FilterSection>
      <FilterSection>
        <h2>Category</h2>
        <form>
          {filterList.category.map((filter, index) => {
            return (
              <FormGroup key={index}>
                <input
                  type="checkbox"
                  name="category"
                  value={filter}
                  onChange={(e) => dispatch(updateFilters(e.target))}
                  checked={category.includes(filter)}
                />
                <label>{filter}</label>
              </FormGroup>
            );
          })}
        </form>
      </FilterSection>
      <FilterSection>
        <h2>Brand</h2>
        <form>
          {filterList.brand.map((filter, index) => {
            return (
              <FormGroup key={index}>
                <input
                  type="checkbox"
                  name="brand"
                  value={filter}
                  onChange={(e) => dispatch(updateFilters(e.target))}
                  checked={brand.includes(filter)}
                />
                <label>{filter}</label>
              </FormGroup>
            );
          })}
        </form>
      </FilterSection>
      <FilterSection>
        <h2>Price</h2>
        <form>
          {filterList.price.map((filter, index) => {
            return (
              <FormGroup key={index}>
                <input
                  type="checkbox"
                  name="price"
                  value={filter}
                  onChange={(e) => dispatch(updateFilters(e.target))}
                  checked={price.some((x) => x.includes(filter.toString()))}
                />
                <label>
                  ${filter[0]} - ${filter[1]}
                </label>
              </FormGroup>
            );
          })}
        </form>
      </FilterSection>
      <FilterSection>
        <h2>Rating</h2>
        <form>
          {filterList.rating.map((filter, index) => {
            return (
              <FormGroup key={index}>
                <input
                  type="checkbox"
                  name="rating"
                  value={filter}
                  onChange={(e) => dispatch(updateFilters(e.target))}
                  checked={rating.includes(filter)}
                />

                <label>
                  <Stars number={filter} />
                </label>
              </FormGroup>
            );
          })}
        </form>
      </FilterSection>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ddd;
  overflow-y: scroll;
  z-index: 25;
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? "auto" : "none")};
  @media (min-width: ${({ theme }) => theme.media.md}) {
    position: relative;
    opacity: 1;
    pointer-events: auto;
    overflow: hidden;
    background: none;
  }
`;
const FilterSection = styled.div`
  padding: 1rem 0 1rem 2rem;
  h2 {
    padding-bottom: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  select {
    font-family: ${({ theme }) => theme.fonts.alternate};
    option {
      font-family: ${({ theme }) => theme.fonts.alternate};
    }
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    padding: 0 0 2rem 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 1rem;
  label {
    padding-left: 1rem;
    font-family: ${({ theme }) => theme.fonts.alternate};
    font-size: ${({ theme }) => theme.sizes.xs};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background: transparent;
  border: none;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    display: none;
  }
`;
