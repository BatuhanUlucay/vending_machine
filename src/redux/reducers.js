import { products } from "../data/products";
import { components } from "../data/components";

const initialState = {
  isLoggedIn: false,
  remainingAttempt: 3,
  session: null,
  userBalance: 0,
  machineBalance: 0,
  products: products,
  selectedProduct: null,
  robotArmSpinning: false,
  components: components,
};

const vendingMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        session: action.payload,
        components: components.map((c) => {
          if (c.id === 2) {
            return { ...c, status: 1 };
          } else {
            return c;
          }
        }),
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
      return {
        ...state,
        selectedProduct: product,
        robotArmSpinning: true,
      };
    case "GIVE_SELECTED_PRODUCT":
      return {
        ...state,
        userBalance: state.userBalance - state.selectedProduct.price,
        machineBalance: state.machineBalance + state.selectedProduct.price,
        products: state.products.map((p) => {
          if (p.id === state.selectedProduct.id) {
            return {
              ...state.selectedProduct,
              quantity: state.selectedProduct.quantity - 1,
            };
          } else {
            return p;
          }
        }),
        robotArmSpinning: false,
      };
    case "GIVE_REFUND":
      return {
        ...state,
        userBalance: 0,
        isLoggedIn: false,
        components: components.map((c) => {
          if (c.id === 2) {
            return { ...c, status: 0 };
          } else {
            return c;
          }
        }),
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
