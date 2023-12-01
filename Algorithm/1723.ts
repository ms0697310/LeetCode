function minimumTimeRequired(jobs: number[], k: number): number {
    jobs = jobs.sort((a, b) => b - a);
    let workers = new Array(k).fill(0);

    let min = Infinity;
    dfs(0);
    return min;
    function dfs(j: number) {
        if (j == jobs.length) {
            min = Math.min(min, Math.max(...workers));
            return;
        }
        let seen = new Set();

        workers.forEach((worker, i) => {
            if (seen.has(worker)) return;
            if (worker + jobs[j] >= min) return;
            seen.add(worker);
            workers[i] += jobs[j];
            dfs(j + 1);
            workers[i] -= jobs[j];
        });
    }
}
