function canPartitionKSubsets(nums: number[], k: number): boolean {
    nums = nums.sort((a, b) => b - a);
    let workers = new Array(k).fill(0);

    let min = Infinity;
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;
    let sideLength = sum / k;
    dfs(0);
    return min == sideLength;
    function dfs(j: number) {
        if (j == nums.length) {
            min = Math.min(min, Math.max(...workers));
            return;
        }
        let seen = new Set();

        workers.forEach((worker, i) => {
            if (seen.has(worker)) return;
            if (worker + nums[j] > sideLength) return;
            if (worker + nums[j] >= min) return;
            seen.add(worker);
            workers[i] += nums[j];
            dfs(j + 1);
            workers[i] -= nums[j];
        });
    }
}
