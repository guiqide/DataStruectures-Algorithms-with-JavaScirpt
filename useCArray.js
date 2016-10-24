/**
 * Created by GUIQD on 2016-10-21.
 */
var CArray = require('./CArray');
var mergeSort = require('./mergeSort');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
// console.log(mynums.toString());
// mynums.bubbleSort(); // 冒泡排序
// mynums.selectionSort(); // 选择排序
// mynums.insertionSort(); // 插入排序
// 希尔排序
// var preTime = new Date().getTime();
// mynums.shellsort();
// var finTime = new Date().getTime();
// console.log('希尔排序后： ');
// console.log(finTime - preTime);
// 归并排序
var nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
mergeSort(nums);
console.log(nums);
