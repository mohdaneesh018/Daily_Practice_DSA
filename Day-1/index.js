// Qs. 1 Find third largest element of an array:

function thirdLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        } else if(arr[i] > second && arr[i] !== first) {
            third = second;
            second = arr[i];
        } else if(arr[i] > third && arr[i] !== second && arr[i] !== first) {
            third = arr[i];
        }
    }
    return third;
}
console.log(thirdLargest([10, 5, 8, 20, 3]));           // 8
console.log(thirdLargest([105, 54, 18, 320, 13]));      // 54