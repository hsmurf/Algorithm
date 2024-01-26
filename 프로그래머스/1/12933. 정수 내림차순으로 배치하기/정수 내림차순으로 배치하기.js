function solution(n) {
    const answer = Number(n.toString().split('').sort().reverse().join(''))
    return answer;
}