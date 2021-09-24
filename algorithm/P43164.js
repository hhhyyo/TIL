//프로그래머스 여행경로

function solution(tickets) {
    let answer = [];
    let check = new Array(tickets.length).fill(0);
    let path = [];

    function dfs(depth) {
        if (depth === tickets.length) {
            return answer.push([...path]);
        }
        for (let i = 0; i < tickets.length; i++) {
            if (!check[i]) {
                if (path[path.length - 1] === tickets[i][0]){
                    check[i] = 1;
                    path.push(tickets[i][1]);
                    dfs(depth + 1);
                    path.pop();
                    check[i] = 0;
                } 
            }
        }
    }

    for(let i=0;i<tickets.length;i++){
        path=[];
        if(tickets[i][0]==="ICN"){
            path.push(tickets[i][0]);
            path.push(tickets[i][1]);
            check[i]=1;
            dfs(1);
            check[i]=0;
            path.pop();
        }
    }

    answer.sort();

    return answer[0];
}
