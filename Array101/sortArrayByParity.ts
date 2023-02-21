import { compareAnswer } from "../Testing/unitTest";
compareAnswer(sortArrayByParity([3, 1, 2, 4]), [2, 4, 3, 1]); // The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
compareAnswer(sortArrayByParity([0]), [0]);
function sortArrayByParity(nums: number[]): number[] {
    let ptr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
            ptr++;
        }
    }
    return nums;
}
