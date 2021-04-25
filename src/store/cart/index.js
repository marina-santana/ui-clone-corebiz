const INITIAL_STATE = {
  items: [],
};

export const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@cart/ADD_PRODUCT':
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
      break;
    default:
      return state;
  }
};

export default cart;
