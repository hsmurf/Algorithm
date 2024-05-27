function solution(nums) {
    const maxPick = nums.length/2
    const hash = {}
    
    for (let p of nums) {
        hash[p] === undefined ? hash[p] = 1 : hash[p]++
    }
    
    const poketmonCount = Object.keys(hash).length;
    
    return poketmonCount > maxPick ? maxPick : poketmonCount
 
}