/**
 * Created by GUIQD on 2016-10-19.
 */
/**
 * 使用散列类的例子
 */
var HashTable = require('./HashTable');
var someName = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
for (var i = 0; i < someName.length; ++i) {
    hTable.put(someName[i]);
}
hTable.showDistro();