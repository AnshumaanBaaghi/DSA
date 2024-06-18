var isValid = function (s) {
    const st = [];
    const obj = { "{": "}", "(": ")", "[": "]" }
    for (let i = 0; i < s.length; i++) {
        if(obj[s[i]]){
            st.push(s[i]);
        }
        else{
            if(s[i]!==obj[st[st.length-1]]){
                return false;
            }
            st.pop();
        }
    }
    return !st.length
};

console.log(isValid('[()[()]{}]'));