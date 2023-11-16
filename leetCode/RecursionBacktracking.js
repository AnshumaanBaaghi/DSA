

class RecursionBacktracking {
    constructor() { }

    findDifferentBinaryString(nums) {
        const obj = {};
        for (let val of nums) {
            obj[val] = 1;
        }
        const permutation = (str) => {
            if (str.length === nums.length) {
                return obj[str] ? false : str;
            }
            return (permutation(str + "0") || permutation(str + "1"));
        }
        return permutation("")
    };

    letterCombinations = function (digits) {
        const n = digits.length;
        const obj = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
        }
        const findCombinations = (index, str,ans) => {
            if (index == n) {
                str && ans.push(str);
                return ans;
            }
            for (let i = 0; i < obj[+digits[index]].length; i++) {
                findCombinations(index+1, str+obj[+digits[index]][i],ans);
            }
            return ans
        }
        return findCombinations(0, "",[]);
        
    };

}
const RecursionBacktrackingMethods = new RecursionBacktracking();

// console.log(RecursionBacktrackingMethods.findDifferentBinaryString(["111", "001", "000"]));
console.log(RecursionBacktrackingMethods.letterCombinations(""));
