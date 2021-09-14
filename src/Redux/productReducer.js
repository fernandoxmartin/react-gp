export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return Object.assign({}, state, {
        guitars: action.payload.guitars,
        filteredGuitars: action.payload.guitars,
        pedals: action.payload.pedals,
        filteredPedals: action.payload.pedals,
        accessories: action.payload.accessories,
        filteredAccessories: action.payload.accessories,
        bestSellers: [
          ...action.payload.guitars,
          ...action.payload.pedals,
          ...action.payload.accessories,
        ]
          .sort((a, b) => (a.sold < b.sold ? 1 : -1))
          .slice(0, 4),
        featured: [
          ...action.payload.guitars,
          ...action.payload.pedals,
          ...action.payload.accessories,
        ].filter((products) => {
          return products.featured === true;
        }),
      });

    case "FILTER_PRODUCTS":
      if (!state) {
        return state;
      } else {
        let filtered = state[action.payload.section]
          .filter((product) => {
            if (action.payload.filters.category.length < 1) {
              return product;
            }
            return action.payload.filters.category.some((cat) =>
              product.type.includes(cat)
            );
          })
          .filter((product) => {
            if (action.payload.filters.brand.length < 1) {
              return product;
            }
            return action.payload.filters.brand.some((bra) =>
              product.brand.includes(bra)
            );
          })
          .filter((product) => {
            let splitted = action.payload.filters.price.map((a) =>
              a.split(",")
            );
            if (action.payload.filters.price.length < 1) {
              return product;
            }
            return splitted.some(
              (pri) =>
                product.price > parseInt(pri[0]) &&
                product.price < parseInt(pri[1])
            );
          })
          .filter((product) => {
            if (action.payload.filters.rating.length < 1) {
              return product;
            }
            return action.payload.filters.rating.some((rat) =>
              product.stars.includes(rat)
            );
          });

        let filteredSection =
          "filtered" +
          action.payload.section.charAt(0).toUpperCase() +
          action.payload.section.slice(1);

        if (action.payload.filters.sort === "best") {
          filtered.sort((a, b) => b.sold - a.sold);
        } else if (action.payload.filters.sort === "low") {
          filtered.sort((a, b) => a.price - b.price);
        } else if (action.payload.filters.sort === "high") {
          filtered.sort((a, b) => b.price - a.price);
        }

        return Object.assign({}, state, {
          [filteredSection]: filtered,
        });
      }

    default:
      return state;
  }
};
