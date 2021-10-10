const toggleCase = str =>
  str.replace(/([a-z])|([A-Z])/g, (match, lowerCase) =>
    lowerCase ? match.toUpperCase() : match.toLowerCase()
  );

console.log(toggleCase('StuDY')); // => 'sTUdy'
