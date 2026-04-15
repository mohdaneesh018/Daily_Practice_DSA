// Qs. Move All Zeros in Last index:

function moveZeros(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]));    // [1, 3, 12, 0, 0];
console.log(moveZeros([0, 0, 1]));           // [1, 0, 0];
console.log(moveZeros([10, 20, 5, 0, 34, 45, 100]));    // [10, 20, 5, 34, 45, 100, 0];