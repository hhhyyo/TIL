// 영화관람
// N명의 앉은 키 정보가 주어지면
// 각 학생들의 최초 시청을 방해하는 학생들의 번호를 출력

function solution(height) {
  let answer = [];
  const len = height.length;
  let d = new Array(len).fill(0);

  for (let i = 1; i < len; i++) {
    if (height[i - 1] > height[i]) d[i] = i;
    else if (height[i - 1] < height[i]) {
      const x = d[i - 1] - 1;
      if (height[i] === height[x]) d[i] = d[x];
      else if (height[i] > height[x]) d[i] = 0;
      else d[i] = d[i - 1];
    }
  }

  answer = d;
  return answer;
}

console.log(solution([65, 50, 55, 53, 55, 50])); // 0 1 1 3 1 5
