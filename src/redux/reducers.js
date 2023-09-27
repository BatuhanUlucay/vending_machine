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
      let components4 = state.components;

      components4 = components4.map((c) => {
        if (c.id === 0) {
          c.status = 0;
        } else if (c.id === 1) {
          c.status = 0;
        } else if (c.id === 3) {
          c.status = 0;
        }
        return c;
      });

      return {
        ...state,
        robotArmSpinning: false,
        components: components4,
      };
    case "SELECT_PRODUCT":
      const product = action.payload;
      let components3 = state.components;

      components3 = components3.map((c) => {
        if (c.id === 0) {
          c.status = 0;
        } else if (c.id === 1) {
          c.status = 0;
        } else if (c.id === 3) {
          c.status = 1;
        }
        return c;
      });
      return {
        ...state,
        selectedProduct: product,
        robotArmSpinning: true,
        components: components3,
      };
    case "GIVE_SELECTED_PRODUCT":
      let components5 = state.components;

      components5 = components5.map((c) => {
        if (c.id === 0) {
          c.status = 0;
        } else if (c.id === 1) {
          c.status = 0;
        } else if (c.id === 3) {
          c.status = 0;
        }
        return c;
      });
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
        components: components5,
        robotArmSpinning: false,
      };
    case "GIVE_REFUND":
      return {
        ...state,
        userBalance: 0,
        isLoggedIn: false,
        session: null,
        components: components.map((c) => {
          if (c.id === 2) {
            return { ...c, status: 0 };
          } else {
            return c;
          }
        }),
      };
    case "RESET_MACHINE":
      return {
        ...state,
        products: products,
      };
    case "COLLECT_MONEY":
      return {
        ...state,
        machineBalance: 0,
      };

    case "ADJUST_HEATER_COOLER":
      const mode = action.payload;
      let components2 = state.components;
      if (mode === "cool") {
        components2 = components2.map((c) => {
          if (c.id === 0) {
            c.status = 1;
          } else if (c.id === 1) {
            c.status = 0;
          }
          return c;
        });
      } else {
        components2 = components2.map((c) => {
          if (c.id === 0) {
            c.status = 0;
          } else if (c.id === 1) {
            c.status = 1;
          }
          return c;
        });
      }
      return {
        ...state,
        components: components2,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        session: null,
        components: components.map((c) => {
          if (c.id === 2) {
            return { ...c, status: 0 };
          } else {
            return c;
          }
        }),
      };
    default:
      return state;
  }
};

export default vendingMachineReducer;
