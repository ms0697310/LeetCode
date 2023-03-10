import { compareAnswer } from "../Testing/unitTest";
compareAnswer(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
compareAnswer(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
function sortedSquares(nums: number[]): number[] {
    return nums.map((val) => val * val).sort((a, b) => a - b);
}
