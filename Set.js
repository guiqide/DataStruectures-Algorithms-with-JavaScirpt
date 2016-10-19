/**
 * Created by GUIQD on 2016-10-19.
 */
/**
 * 集合类的实现
 */
module.exports = function Set() {
    this.dataStore = [];
};
Set.prototype.add = function(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    return false;
};
Set.prototype.remove = function(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    return false
};
Set.prototype.show = function () {
    return this.dataStore;
};
// module.exports = {
//     Set: Set
// };

