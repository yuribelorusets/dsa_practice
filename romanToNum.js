/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    const ROMANS = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        
        if (current === "I" && (next === "V" || next === "X")) {
            result -= ROMANS[current];
        } 
        
        else if (current === "X" && (next === "L" || next === "C")) {
            result -= ROMANS[current];
        } 
        
        else if (current === "C" && (next === "D" || next === "M")) {
            result -= ROMANS[current];
        } 
        
        else result += ROMANS[current];
    }
    
    return result;
};