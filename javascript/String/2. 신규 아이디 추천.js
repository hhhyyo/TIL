function solution(new_id) {
  const recommended = new_id
    .toLowerCase() // 1단계 소문자로 치환
    .replace(/[^\w0-9-.]+/g, '') // 2단계 알파벳소문자,숫자, _ , - , . 제외한 문자 제거
    .replace(/(\.)\1+/g, '.') // 3단계 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    .replace(/^\.|\.$/g, '') // 4단계 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    .replace(/^$/g, 'a') // 5단계 빈 문자열이라면, new_id에 "a"를 대입
    .slice(0, 15) // 6단계 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    .replace(/\.$/g, ''); // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거

  return recommended.length > 2
    ? recommended
    : recommended +
        recommended[recommended.length - 1].repeat(3 - recommended.length);
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('abcdefghijklmn.p'));
