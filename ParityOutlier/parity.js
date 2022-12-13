function findOutlier(integers){
  var evens = [];
  var odds = [];
  for (var i = 0; i < integers.length; i++) 
  {
      if ((integers[i] % 2) == 0) 
      {
          evens.push(integers[i]);
      } 
      else 
      {
          odds.push(integers[i]);
      }
  }
  var elen = evens.length;
  var olen = odds.length;

  if (elen > olen)
  {
      return odds[0];
  } 
  else 
  {
      return evens[0];
  }
}
