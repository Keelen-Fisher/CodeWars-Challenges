function rot13(message) {
  let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
  let capAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let solution = '';

  /* Splitting the message into an array of strings. */
  message.split('').forEach(str => {

    /* Checking if the string is a letter or not. If it is a letter, it will continue to the next if
      statement. If it is not a letter, it will add the string to the solution. */
    if (alphabetLetters.indexOf(str) !== -1 || capAlphabet.indexOf(str) !== -1) {
      let finalStr = '';
      if (str === str.toUpperCase()) {
        finalStr = capAlphabet.subStr(capAlphabet.indexOf(str, capAlphabet[-1])) + capAlphabet.subStr(0, capAlphabet.indexOf(str))
        solution += finalStr[finalStr.indexOf(str) + 13]
      }
      else {
        finalStr = alphabetLetters.subStr(alphabetLetters.indexOf(str, alphabetLetters[-1])) + alphabetLetters.subStr(0, alphabetLetters.indexOf(str))
        solution += finalStr[finalStr.indexOf(str) + 13]
      }
    }
    /* If the string is not a letter, it will add the string to the solution. */
    else {
      solution += str;
    }
  });
  return solution;
}
