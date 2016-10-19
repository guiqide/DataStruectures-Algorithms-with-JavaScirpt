/**
 * Created by GUIQD on 2016-10-19.
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop(element) {
    return this.dataStore[--this.top];
}
function length() {
    return this.top;
}

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
console.log(fact(5));
