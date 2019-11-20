let calculator = ( () => {
  let add = (a, b) => {
    return a + b;
  }

  let substract = (a, b) => {
    return a - b;
  }

  let multiply = (a, b) => {
    return a * b;
  }

  let divide = (a, b) => {
    return a / b;
  }

  return { add, substract, multiply, divide }
})();

export { calculator };