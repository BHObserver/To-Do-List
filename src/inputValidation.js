// inputValidation.js
export default function isValidInput(value) {
  const pattern = /^[a-zA-Z0-9\s]+$/;
  return pattern.test(value);
}
