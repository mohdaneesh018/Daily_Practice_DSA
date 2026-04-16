//Qs. 1. Find Second Largest Element in an array:

var secondLargest = function (arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargest([10, 5, 8, 20, 3]));          // 10
console.log(secondLargest([100, 52, 83, 320, 230]));    // 230
console.log(secondLargest([-1, -2, -3, -4, -5]));       // -2