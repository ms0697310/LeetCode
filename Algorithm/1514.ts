function maxProbability(
    n: number,
    edges: number[][],
    succProb: number[],
    start_node: number,
    end_node: number
): number {
    let nodes: node[] = [];
    for (let index = 0; index < n; index++) {
        nodes.push(new node(index));
    }

    edges.forEach((edge, i) => {
        let [a, b] = [edge[0], edge[1]];
        nodes[a].neighbors.push(b);
        nodes[b].neighbors.push(a);
        nodes[a].neighborProb[b] = succProb[i];
        nodes[b].neighborProb[a] = succProb[i];
    });

    nodes[start_node].probability = 1;

    let current = start_node;
    while (true) {
        let cNode = nodes[current];
        cNode.visited = true;
        cNode.neighbors.forEach((n, i) => {
            if (nodes[n].visited) {
                return;
            }
            let neighbor = nodes[n];
            let edgeP = cNode.neighborProb[n];
            let newP = cNode.probability * edgeP;
            if (neighbor.probability < newP) {
                neighbor.probability = newP;
            }
        });
        let c;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].visited) continue;
            if (c === undefined) c = i;
            else c = nodes[c].probability < nodes[i].probability ? i : c;
        }
        if (c === undefined) break;
        current = c;
    }

    return nodes[end_node].probability;
}

class node {
    value: number = -1;
    visited: boolean = false;
    probability: number = 0;
    neighbors: number[] = [];
    neighborProb: number[] = [];
    constructor(i: number) {
        this.value = i;
    }
}
