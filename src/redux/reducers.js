import { products } from "../data/products";

const initialState = {
  isLoggedIn: false,
  remainingAttempt: 3,
  session: null,
  userBalance: 0,
  machineBalance: 0,
  products: products,
  selectedProduct: null,
  robotArmSpinning: false,
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
    case "CANCEL_REQUEST":
      return {
        ...state,
        robotArmSpinning: false,
      };
    case "SELECT_PRODUCT":
      const product = action.payload;
      if (state.userBalance >= product.price) {
        return {
          ...state,
          selectedProduct: product,
          robotArmSpinning: true,
        };
      } else {
        alert("Not enough money for selected item.");
      }
      return state;

    case "GIVE_SELECTED_PRODUCT":
      return {
        ...state,
        userBalance: state.userBalance - state.selectedProduct.price,
        machineBalance: state.machineBalance + state.selectedProduct.price,
        robotArmSpinning: false,
      };
    case "GIVE_REFUND":
      return {
        ...state,
        userBalance: 0,
        isLoggedIn: false,
      };
    case "RESET_MACHINE":
      return initialState;
    case "COLLECT_MONEY":
      return state;
    default:
      return state;
  }
};

export default vendingMachineReducer;
