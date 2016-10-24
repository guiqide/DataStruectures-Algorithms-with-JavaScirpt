/**
 * Created by GUIQD on 2016-10-20.
 */
module.exports = function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        // this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
};

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        process.stdout.write(i + ' -> ');
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                process.stdout.write(this.adj[i][j] + ' ');
            }
        }
        console.log('');
    }
}
// 深度优先搜索
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log('Visited vertex: ' + v);
    }
    //TODO: w不是数组的值而是索引,bug
    for (let w of this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}
// 广度优先搜索
function bfs(s) {
    "use strict";
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v == undefined) {
            console.log('Visisted vertex: ' + v);
        }
        for (let w of this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
function pathTo(v) {
    "use strict";
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}
function hasPathTo(v) {
    "use strict";
    return this.marked[v];
}