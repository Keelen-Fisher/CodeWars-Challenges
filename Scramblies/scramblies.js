function scramble(str1, str2) {
  var count = Object.create(null);
  
  /* Calling the forEach method on the Array prototype and passing in the string as the first argument. */
  Array.prototype.forEach.call(str1, function(a) {
    count[a] = (count[a] || 0) + 1
  })
  
  /* The every method is used to check if all elements in the array pass the test implemented by the provided function. */
  return Array.prototype.every.call(str2, function(a) {
    return count[a]--;
  })
}
