function solution(n) {
    
    let answer = [];
    let decimal = 0
    for (let remain = n; remain > 0; remain = Math.floor(remain / 3)){
        answer.unshift(remain % 3)
    }
    for (let i = 0; i < answer.length; i++){
        decimal += (answer[i] * (3 ** i))  
    }
    return decimal
    
}