/*

매개변수 nums 배열에 1번 학생부터 N번 학생까지의 음식취향에 관한 정보가 주어진다. 
배열의 원소는 학생이 싫어하는 재료의 번호이다. 
재료의 번호는 1부터 T(1<=T<=20)까지의 정수로 나타낸다. 
싫어하는 재료가 없는 학생은 아무거나 먹겠다는 뜻으로 해석한다.
모든 학생들이 먹을 수 있는 음식의 가지수를 반환합니다.

▣ 매개변수 형식
[[2], [1, 3]], 4

▣ 반환값 형식
6
*/

function solution(nums, t) {
  let answer = 0;
  const student = [];
  const pow = [0];

  for (const num of nums) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += 2 ** num[i];
    }
    student.push(sum);
  }

  for (let i = 1; i <= t; i++) {
    pow.push(2 ** i);
  }

  function dfs(depth, sum) {
    if (sum > 0) {
      let flag = true;
      for (let i = 0; i < student.length; i++) {
        if ((student[i] & sum) === student[i]) {
          flag = false;
          break;
        }
      }
      if (flag) answer++;
    }

    for (let i = depth; i <= t; i++) {
      dfs(i + 1, sum + pow[i]);
    }
  }

  dfs(1, 0);

  return answer + 1;
}
