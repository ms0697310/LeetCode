import { compareAnswer } from "../Testing/unitTest";
compareAnswer(thirdMax([3, 2, 1]), 1);
compareAnswer(thirdMax([1, 2]), 2);
compareAnswer(thirdMax([2, 2, 3, 1]), 1);
function thirdMax(nums: number[]): number {
    nums.sort((a, b) => b - a);
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            count++;
        }
        if (count == 3) return nums[i];
    }

    return nums[0];
}
