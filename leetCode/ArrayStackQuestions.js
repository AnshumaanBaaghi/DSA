

class ArrayString {
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
const ArrayStringMethods = new ArrayString();

console.log(ArrayStringMethods.findDifferentBinaryString(["111", "001", "000"]));
