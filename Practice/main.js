// Qs. 1
function secondLargest(arr) {
    let max = -Infinity;
    let secMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secMax = max;
            max = arr[i];
        } else if (arr[i] > secMax && arr[i] !== max) {
            secMax = arr[i];
        }
    }
    return secMax;
}
console.log(secondLargest([10, 5, 20, 8, 30]));            // 20
console.log(secondLargest([100, 355, 223, 470, 33]));      // 355