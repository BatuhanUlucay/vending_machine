export const insertMoney = (amount) => ({
  type: "INSERT_MONEY",
  payload: amount,
});

export const selectProduct = (product) => ({
  type: "SELECT_PRODUCT",
  payload: product,
});

export const refundMoney = () => ({
  type: "REFUND_MONEY",
});

export const resetMachine = () => ({
  type: "RESET_MACHINE",
});

export const collectMoney = () => ({
  type: "COLLECT_MONEY",
});

export const login = (session) => ({
  type: "LOGIN",
  payload: session,
});

export const failLoginAttempt = () => ({
  type: "FAIL_LOGIN_ATTEMPT",
});

export const expireUserSession = () => ({
  type: "EXPIRE_USER_SESSION",
});

export const giveRefund = () => ({
  type: "GIVE_REFUND",
});

export const giveSelectedProduct = () => ({
  type: "GIVE_SELECTED_PRODUCT",
});

export const cancelRequest = () => ({
  type: "CANCEL_REQUEST",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const adjustHeaterCooler = (mode) => ({
  type: "ADJUST_HEATER_COOLER",
  payload: mode,
});
