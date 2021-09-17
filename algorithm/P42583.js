//프로그래머스 다리를 지나는 트럭 
//다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
//이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let sum = 0;
  let bridge = new Array(bridge_length).fill(0);
  
  while (bridge.length) {
    sum -= bridge.shift();
    answer += 1;

    if (truck_weights.length) {
      if (truck_weights[0] + sum <= weight) {
        const truck_weigth = truck_weights.shift();
        sum += truck_weigth;
        bridge.push(truck_weigth);
      } else {
        bridge.push(0);
      }
    }
  }

  return answer;
}
