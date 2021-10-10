const toggleCase = str =>
  str.replace(/[a-zA-Z]/g, match =>
    /[a-z]/g.test(match) ? match.toUpperCase() : match.toLowerCase()
  );

console.log(toggleCase('StuDY')); // => 'sTUdy'
