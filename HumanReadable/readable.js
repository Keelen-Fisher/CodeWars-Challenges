function formatDuration (seconds) {
  let timeSet = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1},
      result = [];
  
  if(seconds === 0){
    return 'now';
  }
  for(let key in timeSet){
    if(seconds >= timeSet[key]){
/* Dividing the seconds by the timeSet[key] and then rounding down to the nearest whole number. */
      let value = Math.floor(seconds/timeSet[key]);
      /* Checking if the value is greater than 1, if it is, it adds an 's' to the end of the key. */
      result.push(value += value > 1 ? ' ' + key + 's' : ' ' + key);
      /* Taking the remainder of the seconds divided by the timeSet[key] and then reassigning the value
      of seconds to the remainder. */
      seconds = seconds % timeSet[key];
    }
  }
  /* The `result.length > 1` is checking if the length of the result array is greater than 1. If it is,
  it will join the array with a comma and a space. Then it will use a regular expression to replace
  the last comma with an 'and'. If the length of the result array is not greater than 1, it will
  return the first element of the array. */
  return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/,' and'+'$1') : result[0]
}
