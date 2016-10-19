/**
 * Created by GUIQD on 2016-10-18.
 */
/**
 * 允许传入一个返回布尔值的函数，将为true的值存入新数组
 * @param str
 * @returns {boolean}
 */
function after(str) {
    if (str.indexOf('cie') > -1) {
        return true;
    }
    return false;
}

var words = ['recieve', 'deceive', 'percieve', 'deceit', 'concieve'];
var misspelled = words.filter(after);
console.log(misspelled);
