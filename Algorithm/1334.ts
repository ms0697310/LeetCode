function findTheCity(
    n: number,
    edges: number[][],
    distanceThreshold: number
): number {
    let distanceAdj: number[][] = new Array(n)
        .fill(0)
        .map(() => new Array(n).fill(Infinity));
    edges.forEach((edge) => {
        let [u, v, d] = edge;
        distanceAdj[u][v] = d;
        distanceAdj[v][u] = d;
    });
    for (let p = 0; p < n; p++) {
        for (let i = 0; i < n; i++) {
            if (i == p) continue;
            for (let j = 0; j < n; j++) {
                if (i == j) continue;
                let newDist = distanceAdj[i][p] + distanceAdj[p][j];
                distanceAdj[i][j] = Math.min(distanceAdj[i][j], newDist);
            }
        }
    }

    let nieghboring = 0;
    let nCity = n;

    for (let i = 0; i < n; i++) {
        let c = distanceAdj[i].filter((d) => d <= distanceThreshold).length;
        if (c <= nCity) {
            nCity = c;
            nieghboring = i;
        }
    }
    return nieghboring;
}

findTheCity(
    4,
    [
        [0, 1, 3],
        [1, 2, 1],
        [1, 3, 4],
        [2, 3, 1],
    ],
    4
);

findTheCity(
    5,
    [
        [0, 1, 2],
        [0, 4, 8],
        [1, 2, 3],
        [1, 4, 2],
        [2, 3, 1],
        [3, 4, 1],
    ],
    2
);
