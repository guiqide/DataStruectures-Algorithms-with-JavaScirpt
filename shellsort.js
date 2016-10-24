/**
 * Created by GUIQD on 2016-10-21.
 */
module.exports = function shellsort() {
    "use strict";
    var N = this.dataStore.length;
    var h = 1;
    while (h < N/3) {
        h = 3 * h + 1; // [4, 1]
    }
    while (h >= 1) {
        for (let i = h; i < this.dataStore.length; ++i) {
            let temp = this.dataStore[i];
            for (var j = i; j >= h &&  this.dataStore[j - h] > temp; j -= h) {
                this.dataStore[j] = this.dataStore[j - h];
            }
            this.dataStore[j] = temp;
        }
        h = (h - 1) / 3;
    }
};
