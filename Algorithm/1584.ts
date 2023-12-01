function minCostConnectPoints(points: number[][]): number {
    let costs: number[] = new Array(points.length).fill(Infinity);

    costs[0] = 0;
    let sum = 0;
    let [x0, y0] = points[0];
    let newP = 0;
    for (let i = 1; i < points.length; i++) {
        let shortest = Infinity;
        [x0, y0] = points[newP];
        for (let j = 0; j < points.length; j++) {
            if (costs[j] == 0) {
                continue;
            }
            let [x1, y1] = points[j];
            const cost = Math.abs(x0 - x1) + Math.abs(y0 - y1);

            if (cost < costs[j]) {
                costs[j] = cost;
            }
            if (costs[j] < shortest) {
                shortest = costs[j];
                newP = j;
            }
        }
        costs[newP] = 0;
        sum += shortest;
    }
    return sum;
}
minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
]);
