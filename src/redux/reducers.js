const initialState = {
  isLoggedIn: false,
  remainingAttempt: 3,
  session: null,
  userBalance: 0,
  selectedProduct: null,
};

const vendingMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        session: action.payload,
      };
    case "FAIL_LOGIN_ATTEMPT":
      return {
        ...state,
        remainingAttempt: state.remainingAttempt - 1,
      };
    case "EXPIRE_USER_SESSION":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "INSERT_MONEY":
      return {
        ...state,
        userBalance: state.userBalance + action.payload,
      };
    case "SELECT_PRODUCT":
      const product = action.payload;
      if (state.userBalance >= product.price) {
        return {
          ...state,
          selectedProduct: product,
          userBalance: state.userBalance - product.price,
        };
      } else {
        alert("Not enough money for selected item.");
      }
      return state;
    case "RESET_MACHINE":
      return initialState;
    case "COLLECT_MONEY":
      return state;
    default:
      return state;
  }
};

export default vendingMachineReducer;
