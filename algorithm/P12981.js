//프로그래머스 영어 끝말잇기
//사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 
//가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return

function solution(n, words) {
    let answer = [];
    let set = new Set();

    let i=0;
    for(i=1;i<words.length;i++){
        let end = words[i-1].slice(-1);
        let start = words[i][0];
        
        set.add(words[i-1]);
        
        if(set.has(words[i]) || end!==start){
            answer = [ i%n+1 , Math.ceil((i+1)/n)];
            break;
        }
    }
    
    if(i===words.length) return [0,0];

    return answer;
}
