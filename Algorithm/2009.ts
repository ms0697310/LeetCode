function minOperations(nums: number[]): number {
    nums = nums.sort((a, b) => a - b);
    let blocks: number[] = [];
    let cont = 1;
    for (let index = 1; index < nums.length; index++) {
        let d = nums[index] - nums[index - 1];
        if (d <= 1) {
            cont += d;
        } else {
            blocks.push(cont);
            cont = 1;
            blocks.push(d - 1);
        }
    }
    blocks.push(cont);
    blocks.push(Math.pow(10, 5) + 1);
    let l = 0;
    let r = 0;
    let sumOfBlocks = blocks[0];
    let opeCount = 0;
    let totalOfNums = nums.length;
    let minOp = blocks.length == 1 ? 0 : Infinity;
    while (l < blocks.length && r < blocks.length) {
        if (sumOfBlocks < totalOfNums) {
            r++;
            if (r >= blocks.length) break;
            sumOfBlocks += blocks[r];
            if (r % 2 == 1) {
                opeCount += blocks[r];
            }
        }
        if (sumOfBlocks >= totalOfNums) {
            let currOp =
                r % 2 == 1 ? opeCount - (sumOfBlocks - totalOfNums) : opeCount;
            if (minOp > currOp) {
                minOp = currOp;
            }
            sumOfBlocks -= blocks[l];
            if (l % 2 == 1) opeCount -= blocks[l];
            l++;
        }
    }
    return minOp;
}
minOperations([4, 2, 5, 3]);
minOperations([1, 2, 3, 5, 6]);
minOperations([1, 10, 100, 1000]);
minOperations([41, 33, 29, 33, 35, 26, 47, 24, 18, 28]);
