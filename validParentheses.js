/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    if (s.length <= 1) return false;
    
    const valid = { "(": ")", "{" : "}", "[" : "]" };
    let stack = [];
    
    for (const char of s) {

        if (valid[char]){
           stack.push(valid[char]); 
        } 
        
        else if (stack.length > 0 && stack[stack.length-1] === char){
            stack.pop();
        } 
        else{
            return false;
        }
        
    }
    
    return stack.length === 0;
    
};