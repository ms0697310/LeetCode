import { compareAnswer } from "../Testing/unitTest";
compareAnswer(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
compareAnswer(findDisappearedNumbers([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]), [6, 8]);
compareAnswer(findDisappearedNumbers([1, 1]), [2]);
function findDisappearedNumbers(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    for (let index = 0; index < nums.length; index++) {
        let i = Math.abs(nums[index]) - 1;
        nums[i] = -Math.abs(nums[i]);
    }
    let ans: number[] = [];
    nums.forEach((n, index) => n > 0 && ans.push(index + 1));
    return ans;
}
