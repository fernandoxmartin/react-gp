export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const subTotal = (items) => {
  return {
    type: "SUB_TOTAL",
    payload: items,
  };
};

export const updateTotal = () => {
  return {
    type: "UPDATE_TOTAL",
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};

export const increaseQty = (item) => {
  return {
    type: "INCREASE_QTY",
    payload: item,
  };
};

export const decreaseQty = (item) => {
  return {
    type: "DECREASE_QTY",
    payload: item,
  };
};

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const updateFilters = (filter) => {
  return {
    type: "UPDATE_FILTERS",
    payload: filter,
  };
};

export const updateSort = (filter) => {
  return {
    type: "UPDATE_SORT",
    payload: filter,
  };
};

export const resetFilter = () => {
  return {
    type: "RESET_FILTER",
  };
};

export const filterProducts = (filters, section) => {
  return {
    type: "FILTER_PRODUCTS",
    payload: { filters, section },
  };
};
