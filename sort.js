/**
 * Created by GUIQD on 2016-10-18.
 */
/**
 * sort内的比较函数用return >0,<0,=0来区分，第一个数是大于，小于，等于第二个数
 */

function compare(num1, num2) {
    return num1 -  num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
console.log(nums);
