import { compareAnswer } from "../Testing/unitTest";
compareAnswer(searchInsert([1, 3, 5, 6], 5), 2);
compareAnswer(searchInsert([1, 3, 5, 6], 2), 1);
compareAnswer(searchInsert([1, 3, 5, 6], 7), 4);
function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] >= target) {
            end = mid - 1;
        }
    }
    return start;
}
