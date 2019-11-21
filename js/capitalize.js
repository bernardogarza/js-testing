/* eslint-disable import/prefer-default-export */

const capitalize = (string) => {
  const strUpper = string.charAt(0).toUpperCase() + string.substring(1);
  return strUpper;
};

export { capitalize };
