import { test } from "../Testing/unitTest";
test([1, 2, 2], 1, minIncrementForUnique);
test([3, 2, 1, 2, 1, 7], 6, minIncrementForUnique);
test([3, 3, 0, 2, 0, 9, 2, 11, 10, 14, 5, 13, 6, 5, 1], 21, minIncrementForUnique);
function minIncrementForUnique(nums: number[]): number {
    let sortNums = nums.concat().sort((a, b) => a - b);
    let moveCount = 0;
    for (let index = 0; index < sortNums.length - 1; index++) {
        if (sortNums[index] >= sortNums[index + 1]) {
            moveCount += sortNums[index] - sortNums[index + 1] + 1;
            sortNums[index + 1] += sortNums[index] - sortNums[index + 1] + 1;
        }
    }
    return moveCount;
}
