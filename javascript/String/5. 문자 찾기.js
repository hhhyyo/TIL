const count = (str, char) => str.match(new RegExp(char, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3
