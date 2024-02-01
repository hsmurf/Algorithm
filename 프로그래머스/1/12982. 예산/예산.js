function solution(d, budget) {
    var answer = [];
    
    d.sort((a,b) => a-b)
    
    for (let i=0; i < d.length; i++){
        if ( budget - d[i] >= 0){
            answer.push(d[i])
            budget -= d[i]
        }
    }
    
    return answer.length
    
    
}