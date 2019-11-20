/* eslint-disable import/prefer-default-export */

const calculator = (() => {
  const add = (a, b) => a + b;

  const substract = (a, b) => a - b;

  const multiply = (a, b) => a * b;

  const divide = (a, b) => a / b;

  return {
    add, substract, multiply, divide,
  };
})();

export { calculator };
