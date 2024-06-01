function solution(nums) {
    const keyLength = [...new Set(nums)].length
    const halfLength = nums.length/2
      
    return keyLength < halfLength ? keyLength : halfLength
}

// 그냥 해시 reduce로 예전에 푼거 2.41ms/ 33.8mb 
function solution(nums) {
		const phone = nums.reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{})
      
      const keyLength = Object.keys(phone).length
      const halfLength = nums.length/2
      
    return keyLength < halfLength ? keyLength : halfLength    
  }
