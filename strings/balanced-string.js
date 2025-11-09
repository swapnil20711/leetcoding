// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
var balancedStringSplit = function(s) {
    let R = 0;
    let L = 0;
    let count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
            ++R;
        }else{
            ++L;
        }
        if(L===R){
            ++count;
            R=0;
            L=0;
        }
    }
    return count;
};

var balancedStringSplitOptimized = function(s) {
    let R = 0;
    let count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
            ++R;
        }else{
            --R;
        }
        if(R===0){
            ++count;
        }
    }
    return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"))