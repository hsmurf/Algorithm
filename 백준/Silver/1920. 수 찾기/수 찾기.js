const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 각 줄의 데이터를 적절히 파싱
const n = parseInt(input[0]);
const a = input[1].split(' ').map(Number);
const m = parseInt(input[2]);
const b = input[3].split(' ').map(Number);

solution(n, a, m, b);

function solution(n, a, m, b) {
  // 배열 A를 집합으로 변환
  const aSet = new Set(a);
  const results = [];

  // 배열 B의 각 요소에 대해 A 집합에 존재하는지 검사
  for (let i = 0; i < m; i++) {
    if (aSet.has(b[i])) {
      results.push(1);
    } else {
      results.push(0);
    }
  }

  // 결과 출력
  console.log(results.join('\n'));
}
