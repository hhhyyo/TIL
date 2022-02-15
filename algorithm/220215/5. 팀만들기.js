/*
9명의 선수를 3명씩 3개의 팀으로 만든다.
가장 실력이 높은 팀과 가장 실력이 낮은 팀의 실력차가 가장 작도록 해야한다.
최상의 팀을 만들었을 때 실력차를 출력

▣ 입력설명
nums배열에 9명의 실력(1~100)이 정수로 주어집니다.

▣ 출력설명
가장 실력이 높은 팀과 가장 실력이 낮은 팀의 실력차를 반환합니다.

▣ 매개변수 형식
[1, 2, 3, 4, 5, 6, 7, 8, 9]

▣ 반환값 형식
0
*/
function solution(nums) {
    let answer = Number.MAX_SAFE_INTEGER;
    const capacity = new Array(3).fill(3);
    const total = new Array(3).fill(0);
    
    function dfs(depth){
        if(depth===9){
            const max = Math.max(...total);
            const min = Math.min(...total);
            answer = Math.min(max-min,answer);
            return;
        }
        
        for(let i=0;i<3;i++){
            if(capacity[i]){
                capacity[i]--;
                total[i]+=nums[depth];
                dfs(depth+1);
                capacity[i]++;
                total[i]-=nums[depth];
            }
        }
    }
    
    dfs(0);
    
    return answer;
}
