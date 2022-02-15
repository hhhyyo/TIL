// 지도의 크기는 항상 10*10
//“,”(쉼표) - 빈칸, “＊”(별) - 나무, “C" - 송아지, ”H" - 현수
// 먼저 북쪽(지도에서 위쪽)으로 출발하되, 계속 한쪽방향으로 가다가 나무나 지도의 끝에 이르면 90도 시계방향으로 회전하게 됩니다.
// 한 칸을 이동하거나, 방향을 회전할 때에는 1분이 소요된다.
// 만약 이동, 또는 회전을 한 후 현수와 송아지가 같은 칸에 있게 되면 현수는 소를 찾게 됩니다.
// 송아지와 현수가 만나면 시간(분)을 반환하고, 만날 수 없으면 “0”을 반환합니다.현수가 송아지를 만날 수 있다면 그 시간은 10000분을 넘지 않습니다.

function solution(board) {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const width = 10;

  let directionH = 0;
  let directionC = 0;
  const pathH = [];
  const pathC = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 'H') pathH.push([i, j]);
      else if (board[i][j] === 'C') pathC.push([i, j]);
    }
  }

  while (1) {
    const [hx, hy] = pathH.shift();
    const [cx, cy] = pathC.shift();

    if (hx === cx && hy === cy) break;

    const [nhx, nhy] = [hx + dx[directionH], hy + dy[directionH]];
    const [ncx, ncy] = [cx + dx[directionC], cy + dy[directionC]];

    if (
      nhx < 0 ||
      nhx >= width ||
      nhy < 0 ||
      nhy >= width ||
      board[nhx][nhy] === '*'
    ) {
      directionH = (directionH + 1) % 4;
      pathH.push([hx, hy]);
    } else {
      pathH.push([nhx, nhy]);
    }
    if (
      ncx < 0 ||
      ncx >= width ||
      ncy < 0 ||
      ncy >= width ||
      board[ncx][ncy] === '*'
    ) {
      directionC = (directionC + 1) % 4;
      pathC.push([cx, cy]);
    } else {
      pathC.push([ncx, ncy]);
    }

    answer++;
  }

  return answer;
}

console.log(
  solution([
    '*,,,*,,,,,',
    ',,,,,,*,,,',
    ',,**,,,*,,',
    ',,,,,,,,,,',
    ',,,*,*,,,,',
    '*,,,,,*,*,',
    ',,,*,,,,,,',
    ',,*,,,,,H*',
    ',,,*,*,,C*',
    ',*,*,,,,,*',
  ])
); // 2
