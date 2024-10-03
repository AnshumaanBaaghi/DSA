const isValidParentheses = (start, s) => {
    let count = 0
    const stack = [];
  
    for (let i = start; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(")")
        }
        else {
            if (!stack.length || stack[stack.length - 1] != s[i]) {
                break;
            }
            count += 2
            stack.pop();
        }
    }
    return count
}

var longestValidParentheses = function (s) {
    for( let start =0;start<s.length;start++){
        let max = isValidParentheses(start, s)
        if(max) return max
    }
    return 0;
};

console.log(longestValidParentheses("()(()")); //       -2