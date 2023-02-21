import { compareAnswer, compareAnswerInplace } from "../Testing/unitTest";
compareAnswerInplace([0, 1, 0, 3, 12], [1, 3, 12, 0, 0], moveZeroes);
compareAnswerInplace([0], [0], moveZeroes);
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeroPointer = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== 0) {
            nums[zeroPointer++] = nums[index];
        }
    }
    for (let index = zeroPointer; index < nums.length; index++) {
        nums[index] = 0;
    }
}
