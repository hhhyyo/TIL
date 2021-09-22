function deepClone(param) {
  // 기본적으로 param으로 초기화
  let copy = param;
  const typeParam = Object.prototype.toString.call(param);

  // object, array가 아닌 경우 copy 바로 리턴
  if (typeParam !== '[object Object]' && typeParam !== '[object Array]')
    return copy;

  // object, array 인 경우
  copy = typeParam === '[object Object]' ? {} : [];

  Object.keys(param).forEach(key => {
    copy[key] = deepClone(param[key]);
  });

  return copy;
}

export default deepClone;
