const compress = str => str.replace(/(.)\1+/g, match => match[0] + match.length); // AB2C3E

console.log(compress('ABBCCCE')); // => AB2C3E
