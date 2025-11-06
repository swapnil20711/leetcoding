var maxFreqSum = function(s) {
    let charMap = new Map();
    let consonantMax = 0;
    let vowelMax = 0;

    let vowels = ['a','e','i','o','u']

    for(let i=0;i<s.length;i++){
        if(charMap.has(s[i])){
            charMap.set(s[i],charMap.get(s[i])+1);
        }else{
            charMap.set(s[i],1)
        }
    }
    for (let [key, value] of charMap) {
      if(vowels.includes(key)){
          vowelMax = Math.max(vowelMax,value)
      }else{
          consonantMax = Math.max(consonantMax,value)
      }
    }
    return vowelMax+consonantMax;
};

console.log(maxFreqSum('sucesses'))