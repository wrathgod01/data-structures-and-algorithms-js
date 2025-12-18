// build graph from number of nodes(n) and edges list
function buildGraph(n, edges) {
    let graph = Array.from({length: n}, () => []);

    for(const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    return graph;
}

function bfs(n, edges, start) {
    const graph = buildGraph(n, edges);

    let queue = [start], front = 0;
    let visited = new Array(n).fill(false);
    visited[start] = true;
    let res = [];

    while(front < queue.length) {
        let node = queue[front++];
        res.push(node);

        for(const neighbor of graph[node]) {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return res;
}

// console.log(buildGraph(4, [[0,1], [1,2], [0,2], [0,3]]));

console.log(bfs(4, [[0,1], [1,2], [0,2], [0,3]], 0));
console.log(bfs(4, [[0,1], [1,2], [0,2], [0,3]], 1));
console.log(bfs(4, [[0,1], [1,2], [0,2], [0,3]], 2));
console.log(bfs(4, [[0,1], [1,2], [0,2], [0,3]], 3));


// Leetcode 547
// isConnected - 2D matrix depicting graph
function findProvinceCount(isConnected) {
    let n = isConnected.length;
    let visited = new Array(n).fill(false);
    let count = 0;

    let bfs = (startNode) => {
        let queue = [startNode], front = 0;
        visited[startNode] = true;
        
        while(front < queue.length) {
            let node = queue[front++];

            for(let i = 0; i < n; i++) {
                if(isConnected[node][i] && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            count++;
            bfs(i);
        }
    }

    return count;
}