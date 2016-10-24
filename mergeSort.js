/**
 * Created by GUIQD on 2016-10-22.
 */
module.exports = function mergeSort(arr) {
    "use strict";
    if (arr.length < 2) {
        return
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <=arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
};
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    "use strict";
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    let k = startRight;
    for (let i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (let i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    var m = 0;
    var n = 0;
    for (let k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log('left array - ', leftArr);
    console.log('right array - ', rightArr);
}

