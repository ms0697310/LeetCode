function secondMinimum(
    n: number,
    edges: number[][],
    time: number,
    change: number
): number {
    let visited: boolean[] = new Array(n + 1).fill(false);
    let dist: number[] = new Array(n + 1).fill(Infinity);
    let path: number[][] = new Array(n + 1).fill(0).map(() => []);
    let queue: number[] = [];
    let adj: number[][] = new Array(n + 1).fill(0).map(() => []);

    edges.forEach((edge) => {
        let [u, v] = edge;
        adj[u].push(v);
        adj[v].push(u);
    });
    queue.push(1);
    dist[1] = 0;
    while (queue.length) {
        let c: number = queue.shift()!;
        if (c == n) {
            break;
        }
        visited[c] = true;
        adj[c].forEach((neighbor) => {
            if (visited[neighbor]) return;
            queue.push(neighbor);
            if (dist[neighbor] > dist[c] + 1) {
                path[neighbor] = [c];
                dist[neighbor] = dist[c] + 1;
            } else if (dist[neighbor] == dist[c] + 1) {
                path[neighbor].push(c);
            }
        });
    }

    let sameBFSLayer = false;
    let queue2: number[] = [];
    queue2.push(n);
    visited = new Array(n + 1).fill(false);
    while (queue2.length) {
        let c: number = queue2.shift()!;
        if (visited[c]) continue;
        visited[c] = true;
        adj[c].forEach((neighbor) => {
            if (dist[neighbor] == dist[c]) {
                sameBFSLayer = true;
            }
        });
        if (sameBFSLayer) break;
        queue2.push(...path[c]);
    }
    let t = 0;
    let secondDist = dist[n] + (sameBFSLayer ? 1 : 2);
    while (secondDist--) {
        let isRedLight = Math.floor(t / change) % 2 === 1;
        if (isRedLight) t += change - (t % change);
        t += time;
    }
    return t;
}
