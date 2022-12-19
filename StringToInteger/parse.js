const numbersObj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
  'hundred': 100,
  'thousand': 1000,
  'million': 1000000
}

function simpleValue(number){
 
  /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
  return numbersObj[number]
          ? numbersObj[number]
          : number.split('-').map(v => numbersObj[v]).reduce((prev, next) => prev + next, 0);
}

function complexValue(numbers){
  let result = 0;
  /* Removing the word 'and' from the array. */
  numbers = numbers.filter(v => v !== 'and');

  for(let i = 0, l = numbers.length; i < l;){
    if (numbers[i + 1] && ['hundred', 'thousand', 'million'].includes(numbers[i + 1])){
      let v = numbers[i + 1];
  
      if(v === 'hundred'){
        result += numbersObj[numbers[i]] * numbersObj[numbers[i + 1]]; 
      }

      else{
        result += simpleValue(numbers[i]);
        result = result * numbersObj[numbers[i + 1]];
      }

      i += 2 
      continue;
    }
    else if(numbers[i] === 'thousand'){
      result = result * numbersObj['thousand'];
    }
    else{
      res += simpleValue(numbers[i]);
    }
    i += 1; 
  }
  return result;
}

function parseInt(string){
  const numbers = string.split(' ');

  return numbers.length === 1 ? simpleValue(numbers[0]) : complexValue(numbers);
}
