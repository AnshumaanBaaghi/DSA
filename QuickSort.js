const QuickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = Math.floor(arr.length / 2);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        i != pivot && (arr[i] < arr[pivot] ? left.push(arr[i]) : right.push(arr[i]));
    }
    return [...QuickSort(left), arr[pivot], ...QuickSort(right)]
}

console.log(QuickSort([6, 3, 6, 4, 6, 2, 7, 2]));