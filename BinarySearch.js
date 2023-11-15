const binarySearch = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;
    let ans = 0;
    while (left < right) {
        const mid = Math.floor((right + left) / 2);
        if (arr[mid] > k) {
            right = mid - 1;
            ans = mid;
        }
        else left = mid + 1;

    }
    console.log('ans:', ans)
}
binarySearch([1, 3, 5, 7, 9], 5)