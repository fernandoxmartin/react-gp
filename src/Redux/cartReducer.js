const initialState = {
  prod: [],
  qty: 0,
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const condition = state.prod.some(
        (item) => item.id === action.payload.id
      );

      if (condition === false) {
        return Object.assign({}, state, {
          prod: [...state.prod, { ...action.payload, qty: 1 }],
          qty: state.qty + 1,
        });
      }
      const update = state.prod.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      return Object.assign({}, state, {
        prod: update,
        qty: state.qty + 1,
      });

    case "REMOVE_ITEM":
      return Object.assign({}, state, {
        prod: state.prod.filter((item) => item.id !== action.payload.id),
        qty: state.qty - action.payload.qty,
      });

    case "INCREASE_QTY":
      if (action.payload.qty >= 4) {
        return state;
      }
      const inc = state.prod.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      return Object.assign({}, state, {
        prod: inc,
        qty: state.qty + 1,
      });

    case "DECREASE_QTY":
      if (action.payload.qty <= 1) {
        return state;
      }
      const dec = state.prod.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
      return Object.assign({}, state, {
        prod: dec,
        qty: state.qty - 1,
      });

    case "REMOVE_ALL":
      return initialState;

    case "UPDATE_TOTAL":
      const sum = state.prod
        .reduce((a, b) => a + b.price * b.qty, 0)
        .toFixed(2);
      return Object.assign({}, state, {
        ...state,
        total: sum,
      });

    default:
      return state;
  }
};
