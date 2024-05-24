function solution(nums) {
    let maxPick = nums.length/2
    let obj = {}
    
    for (let p of nums) {
        obj[p] === undefined ? obj[p] = 1 : obj[p]++
    }
    
    let pickedPoketmonCount = Object.keys(obj).length;
    
    return Math.min(pickedPoketmonCount, maxPick);
 
}