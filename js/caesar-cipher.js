let caesarCipher = (string, shift) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const ABC = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  let splitString = string.split('');
  let newString = (index, shift, alphabet) => {
    return ((index + shift) % alphabet.length)
  }
  
  for (let i = 0; i < splitString.length; i++) {
    if (abc.includes(splitString[i])){
      let newIndex = newString(abc.indexOf(splitString[i]), shift, abc);
      splitString[i] = abc[newIndex];
    } else if (ABC.includes(splitString[i])){
      let newIndex = newString(ABC.indexOf(splitString[i]), shift, ABC);
      splitString[i] = ABC[newIndex];
    } else {
      splitString[i] = splitString[i];
    }
  }

  return splitString.join('');
};

export { caesarCipher }
