/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let sorted = nums.sort((a, b) => {
        return a - b;
    });
    
    let i = 0;  
    let j = sorted.length - 1;
    
    while (i < j) {
        let left = sorted[i];
        let right = sorted[j];
        
        if (left + right === target) return [i, j];
        
        if (left + right < target){
            i += 1;
        }
        
        else if (left + right > target) {
            j -= 1;
        }
    }
    
};