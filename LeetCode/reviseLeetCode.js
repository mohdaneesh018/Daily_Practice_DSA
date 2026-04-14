12-04-2026:-

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





13-04-2026:-

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





14-04-2026:-

Qs. 5. Write a code of Contains Duplicate:

function isDuplicate(arr) {
    let output = {};

    for (let i = 0; i < arr.length; i++) {
        if (output[arr[i]]) {
            return true;
        }
        output[arr[i]] = true;
    }
    return false;
}
console.log(isDuplicate([1, 2, 3, 1]));         // true
console.log(isDuplicate([1, 2, 3, 4]));         // false





Qs. 6. Write a code Best Time to Buy and Sell Stock:

function isProfit(prices) {
    let min = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else {
            let currentProfit = prices[i] - min; 
            if(currentProfit > profit) {
                profit = currentProfit; 
            }
        }
    }
    return profit;
}
console.log(isProfit([7, 1, 5, 3, 6, 4]))           // 5
console.log(isProfit([10, 20, 15, 56, 33]))         // 46
console.log(isProfit([33, 22, 13, 5, 54, 89]))      // 84