const SUPPLIER_PASSWORD = process.env.REACT_APP_SUPPLIER_PASSWORD;

// Checks if password input matches the password defined as an environment variable.
export function securityCheck(password) {
  return password === SUPPLIER_PASSWORD;
}
