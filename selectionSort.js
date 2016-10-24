/**
 * Created by GUIQD on 2016-10-21.
 */
module.exports = function selectionSort() {
    "use strict";
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        this.swap(this.dataStore, outer, min);
    }
};
