/**
 * Created by GUIQD on 2016-10-19.
 */
/**
 * 散列表类
 */
module.exports = function() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.betterHash = betterHash;
    this.put = put;
};
function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total +=data.charCodeAt(i);
    }
    return total % this.table.length;
}
function betterHash(data) {
    var H = 31; // 霍纳算法，乘以一个很小的质数
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}
function put(data) {
    // var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data;
}
function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

