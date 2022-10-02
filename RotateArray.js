// Simple Array Rotation program in Js

function rotateArray(arr, n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        temp.push(arr[i]);
    }
    for (let i = 0; i < arr.length - n; i++) {
        arr[i] = arr[i + n];
    }
    for (let i = 0; i < n; i++) {
        arr[arr.length - n + i] = temp[i];
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 2;
console.log(rotateArray(arr, n));
