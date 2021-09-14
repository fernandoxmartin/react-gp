const initialState = {
  sort: "best",
  category: [],
  brand: [],
  price: [],
  rating: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTERS":
      if (action.payload.checked) {
        return {
          ...state,
          [action.payload.name]: [
            ...state[action.payload.name],
            action.payload.value,
          ],
        };
      } else {
        let removedFromArray = state[action.payload.name].filter(
          (event) => event !== action.payload.value
        );
        return { ...state, [action.payload.name]: removedFromArray };
      }

    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload.value,
      };

    case "RESET_FILTER":
      return initialState;

    default:
      return state;
  }
};
