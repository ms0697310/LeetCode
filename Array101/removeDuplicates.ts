import { compareAnswer } from "../Testing/unitTest";
compareAnswer(removeDuplicates([1, 1, 2]), 2);
compareAnswer(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
function removeDuplicates(nums: number[]): number {
    let count = 0;
    let currentMax = -9999;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentMax) {
            currentMax = nums[i];
            nums[count++] = currentMax;
        }
    }
    return count;
}
