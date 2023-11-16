

class ArrayStack {
    constructor() { }

    maximumElementAfterDecrementingAndRearranging(arr) {
        arr.sort((a, b) => a - b);
        arr[0] = 1;
        for (let i = 0; i < arr.length - 1; i++) {
            if ((arr[i + 1] - arr[i]) > 1) {
                arr[i + 1] = arr[i] + 1;
            }
        }
        console.log(arr[arr.length - 1]);
    };

}
const ArrayStackMethods = new ArrayStack();

console.log(ArrayStackMethods.findDifferentBinaryString(["111", "001", "000"]));
