import { compareAnswer } from "../Testing/unitTest";
compareAnswer(heightChecker([1, 1, 4, 2, 1, 3]), 3);
compareAnswer(heightChecker([5, 1, 2, 3, 4]), 5);
compareAnswer(heightChecker([1, 2, 3, 4, 5]), 0);
function heightChecker(heights: number[]): number {
    let sortedArr = heights.concat().sort((a, b) => a - b);
    return sortedArr.map((val, i) => +(val != heights[i])).reduce((a, b) => a + b);
}
