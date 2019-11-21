/* eslint-disable import/prefer-default-export */

const array = (arr) => {
  const object = {
    avg: (arr.reduce((a, b) => a + b, 0)) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,

  };
  return object;
};

export { array };
