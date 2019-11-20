/* eslint-disable import/prefer-default-export */

const caesarCipher = (string, shift) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const ABC = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const splitString = string.split('');
  const newString = (index, shiftNumber, alphabet) => ((index + shiftNumber) % alphabet.length);

  for (let i = 0; i < splitString.length; i += 0) {
    if (abc.includes(splitString[i])) {
      const newIndex = newString(abc.indexOf(splitString[i]), shift, abc);
      splitString[i] = abc[newIndex];
    } else if (ABC.includes(splitString[i])) {
      const newIndex = newString(ABC.indexOf(splitString[i]), shift, ABC);
      splitString[i] = ABC[newIndex];
    }
  }

  return splitString.join('');
};

export { caesarCipher };
