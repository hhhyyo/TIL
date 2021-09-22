function isEqual(...args) {
  // 인수 미전달
  if (args.length < 2) {
    throw new Error(
      `isEqual requires at least 2 argument, but only ${args.length} were passed`
    );
  }

  const param1 = args[0];
  const param2 = args[1];
  const typeParam1 = Object.prototype.toString.call(param1);
  const typeParam2 = Object.prototype.toString.call(param2);

  // type check
  if (typeParam1 !== typeParam2) return false;
  // object, array가 아닌 경우
  if (typeParam1 !== '[object Object]' && typeParam1 !== '[object Array]')
    return Object.is(param1, param2);

  // object, array 인 경우
  const keysParam1 = Object.keys(param1);
  const keysParam2 = Object.keys(param2);

  // key의 개수가 다르면 false
  if (keysParam1.length !== keysParam2.length) return false;

  for (const key of keysParam1) {
    if (isEqual(param1[key], param2[key]) === false) return false;
  }

  return true;
}

export default isEqual;
