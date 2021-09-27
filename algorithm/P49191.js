//프로그래머스 순위
//플로이드와샬

function solution(n, results) {
    let answer = 0;
    let d = Array.from({length:n+1},()=>new Array(n+1).fill(0));
    

    for(let [x,y] of results){
        d[x][y]++;
    }
    
    for(let k=1;k<=n;k++){
        for(let i=1;i<=n;i++){
            for(let j=1;j<=n;j++){
                if(d[i][k]&&d[k][j])
                    d[i][j]=1;
            }
        }
    }
    
    for(let i=1;i<=n;i++){
        let cnt=0;
        for(let j=1;j<=n;j++){
            if(d[i][j]||d[j][i]) cnt++;
        }
        if(cnt===n-1) answer++;
    }
    
    
    return answer;
}
