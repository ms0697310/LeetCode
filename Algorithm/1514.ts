function maxProbability(
    n: number,
    edges: number[][],
    succProb: number[],
    start_node: number,
    end_node: number
): number {
    const maxProbablity = new Array(n).fill(0);
    maxProbablity[start_node] = 1;
    let hasUpdate = true;
    while (hasUpdate) {
        hasUpdate = false;
        for (let j = 0; j < edges.length; ++j) {
            const [u, v] = edges[j];
            const prob = succProb[j];
            if (maxProbablity[u] * prob > maxProbablity[v]) {
                maxProbablity[v] = maxProbablity[u] * prob;
                hasUpdate = true;
            }
            if (maxProbablity[v] * prob > maxProbablity[u]) {
                maxProbablity[u] = maxProbablity[v] * prob;
                hasUpdate = true;
            }
        }
    }

    return maxProbablity[end_node];
}
