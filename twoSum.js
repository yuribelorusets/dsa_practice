/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    let hashMap = {};
    let len = nums.length;
    
    for (let i = 0; i < len; i++) {
        
        let complement = target - nums[i];
        
        if (complement in hashMap) {
            return [i, hashMap[complement]];
        }
        
        hashMap[nums[i]] = i;
    }
    
    
};