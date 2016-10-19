/**
 * Created by GUIQD on 2016-10-19.
 */
function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
function add(key, value) {
    this.dataStore[key] = value;
}
function find(key) {
    return this.dataStore[key];
}
function remove(key) {
    delete this.dataStore[key];
}
function showAll() {
    var arr= Object.keys(this.dataStore);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + '->' + this.dataStore[arr[i]]);
    }
}

// 测试字典
var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
pbook.showAll();
