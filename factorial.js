/**
 * Created by GUIQD on 2016-10-17.
 */
/**
 * 递归求阶乘
 * 任何可以被递归定义的函数，都可以被改写为迭代式的程序，要将这点牢记于心
 */
function factorial(number) {
    if (number == 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5));
