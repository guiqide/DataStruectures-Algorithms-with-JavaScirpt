/**
 * Created by GUIQD on 2016-10-18.
 */
function WeekTemp() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(temp) {
    this.dataStore.push(temp);
}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}
var thisWeek = new WeekTemp();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
console.log(thisWeek.average());
