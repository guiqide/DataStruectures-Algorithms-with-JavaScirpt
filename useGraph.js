/**
 * Created by GUIQD on 2016-10-20.
 */
var Graph = require('./Graph');
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
// g.dfs(0);
// g.bfs(0);

// 最短路径
var vertex = 4;
var paths = g.pathTo(vertex);
console.log(typeof paths);
while (paths.length > 0) {
    if (paths.length > 1) {
        process.stdout.write(paths.pop() + '-');
    } else {
        process.stdout.write(paths.pop());
    }
}