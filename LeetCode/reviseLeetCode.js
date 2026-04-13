12-04-2026
Qs. 1 Two Sum:

var twoSum = function (arr, target) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if((arr[i] + arr[j]) == target) {
                result.push(arr[i], arr[j]);
            }
        }
    }
    return result;
}
console.log(twoSum([2, 7, 5, 11], 12));             // [7, 5]
console.log(twoSum([33, 43, 34, 22], 55));          // [33, 22]




Qs. 2. Valid Anagram:

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        let count = [];

        for (let i = 0; i <= s.length - 1; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
        }
        for (let j = 0; j <= t.length - 1; j++) {
            if (!count[t[j]]) {
                return false;
            }
            count[t[j]]--;
        }
    }
    return true;
}
console.log(isAnagram("silent", "listen"));        // true
console.log(isAnagram("raju", "care"));            // false





13-04-2026
Qs. 3. Reverse String in array:

var reversedStr = function (strArr) {
    let start = 0;
    let end = strArr.length - 1;

    while (start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;

        start++;
        end--
    }
    return strArr;
}
console.log(reversedStr(["h", "e", "l", "l", "o"]));                // ["o", "l", "l", "e", "h"]
console.log(reversedStr(["A", "n", "e", "e", "s", "h"]));           // ["h", "s", "e", "e", "n", "A"]





Qs. 4. Check Palindrome the number:

var isCheck = function (num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original == reversed) {
        return true;
    } else {
        return false;
    }
}
console.log(isCheck(12321));               // true
console.log(isCheck(12345));               // false