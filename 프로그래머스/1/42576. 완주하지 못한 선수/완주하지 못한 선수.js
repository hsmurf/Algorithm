function solution(participant, completion) {
    
    const hash = participant.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? ++acc[cur] : 1
        return acc
}, {});
    
    completion.forEach((cur) => {
        if (hash[cur]) {
            hash[cur]--;
        }
    });
    
    for (let key in hash) {
        if (hash[key] === 1) {
            return key;
        }
    }
}