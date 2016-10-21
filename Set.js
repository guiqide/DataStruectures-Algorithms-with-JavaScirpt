/**
 * Created by GUIQD on 2016-10-19.
 */
/**
 * 集合类的实现
 */
module.exports = function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
};
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    return false;
}
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    return false
}
function show() {
    return this.dataStore;
}
function remove(data) {
    root = removeNode(this.root, data);
}

