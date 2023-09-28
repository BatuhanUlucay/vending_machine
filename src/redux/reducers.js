import { products } from "../data/products";
import { components } from "../data/components";
import {
  updateComponentsLights,
  updateComponentsForCancelRequest,
  updateComponentsForSelectProduct,
  updateComponentsForGiveSelectedProduct,
  decreaseSelectedProductQuantity,
  toggleHeaterAndCooler,
} from "../util/machineUtils";

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
  isPopupOpen: false,
  popUpContent: "",
};

const vendingMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        session: action.payload,
        components: updateComponentsLights(state.components, 1),
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
        components: updateComponentsLights(state.components, 0),
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
        components: updateComponentsForCancelRequest(state.components),
      };
    case "SELECT_PRODUCT":
      const product = action.payload;
      return {
        ...state,
        selectedProduct: product,
        robotArmSpinning: true,
        components: updateComponentsForSelectProduct(state.components),
      };
    case "GIVE_SELECTED_PRODUCT":
      return {
        ...state,
        userBalance: state.userBalance - state.selectedProduct.price,
        machineBalance: state.machineBalance + state.selectedProduct.price,
        products: decreaseSelectedProductQuantity(
          state.products,
          state.selectedProduct
        ),
        components: updateComponentsForGiveSelectedProduct(state.components),
        robotArmSpinning: false,
      };
    case "GIVE_REFUND":
      return {
        ...state,
        userBalance: 0,
        isLoggedIn: false,
        session: null,
        components: updateComponentsLights(state.components, 0),
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
      return {
        ...state,
        components: toggleHeaterAndCooler(state.components, mode),
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        session: null,
        components: updateComponentsLights(state.components, 0),
      };
    case "SHOW_POPUP":
      const content = action.payload;
      return {
        ...state,
        isPopupOpen: true,
        popUpContent: content,
      };
    case "CLOSE_POPUP":
      return {
        ...state,
        isPopupOpen: false,
        popUpContent: "",
      };

    default:
      return state;
  }
};

export default vendingMachineReducer;
