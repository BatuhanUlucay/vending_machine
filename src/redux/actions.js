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

export const login = () => ({
  type: "LOGIN",
});

export const failLoginAttempt = () => ({
  type: "FAIL_LOGIN_ATTEMPT",
});
