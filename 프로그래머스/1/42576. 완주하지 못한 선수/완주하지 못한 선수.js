function solution(participant, completion) {
    
    const participantHash = participant.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? ++acc[cur] : 1
        return acc
}, {});
    
    completion.forEach((cur) => {
        if (participantHash[cur]) {
            participantHash[cur]--;
        }
    });
    
    for (let key in participantHash) {
        if (participantHash[key] === 1) {
            return key;
        }
    }
}