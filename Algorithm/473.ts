function makesquare(matchsticks: number[]): boolean {
    matchsticks = matchsticks.sort((a, b) => b - a);
    let workers = new Array(4).fill(0);

    let min = Infinity;
    let sideLength = matchsticks.reduce((a, b) => a + b, 0) / 4;
    dfs(0);
    return min == sideLength;
    function dfs(j: number) {
        if (j == matchsticks.length) {
            min = Math.min(min, Math.max(...workers));
            return;
        }
        let seen = new Set();

        workers.forEach((worker, i) => {
            if (seen.has(worker)) return;
            if (worker + matchsticks[j] > sideLength) return;
            if (worker + matchsticks[j] >= min) return;
            seen.add(worker);
            workers[i] += matchsticks[j];
            dfs(j + 1);
            workers[i] -= matchsticks[j];
        });
    }
}
