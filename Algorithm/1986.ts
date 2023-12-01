function minSessions(tasks: number[], sessionTime: number): number {
    let workers = new Array(14).fill(0);

    let min = 14;
    dfs(0);
    return min;
    function dfs(j: number) {
        if (j == tasks.length) {
            min = Math.min(min, workers.filter((w) => w > 0).length);
            return;
        }
        let seen = new Set();

        workers.forEach((worker, i) => {
            if (seen.has(worker)) return;
            if (worker + tasks[j] > sessionTime) return;
            if (workers.filter((w) => w > 0).length >= min) return;
            seen.add(worker);
            workers[i] += tasks[j];
            dfs(j + 1);
            workers[i] -= tasks[j];
        });
    }
}
