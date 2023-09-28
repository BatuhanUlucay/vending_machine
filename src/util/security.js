const SUPPLIER_PASSWORD = process.env.REACT_APP_SUPPLIER_PASSWORD;

export function securityCheck(password) {
  return password === SUPPLIER_PASSWORD;
}
