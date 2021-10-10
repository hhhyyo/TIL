const diffDays = (date1, date2) =>
  Math.abs(Date.parse(date1) - Date.parse(date2)) / 86400000;

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364
