let caesarCipher = (string, shift) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const ABC = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

  let splitString = string.split('');
  let finalString = '';

  let newString = (index, shift, alphabet) => {
    return ((index + shift) % alphabet.length)
  }
  for (let i = 0; i < splitString; i++) {
    if (abc.includes(splitString[i])){
      let newIndex = newString(splitString[i], shift, abc);
      finalString += abc[newIndex];
    } else if (ABC.includes(splitString[i])){
      let newIndex = newString(splitString[i], shift, ABC);
      finalString += ABC[newIndex];
    } else {
      finalString += splitString[i];
    }
  }
  // return abc.indexOf(splitString[0]);
  return finalString;
}

export { caesarCipher }