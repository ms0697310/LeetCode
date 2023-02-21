import { compareAnswer } from "../Testing/unitTest";
compareAnswer(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);
function replaceElements(arr: number[]): number[] {
    let maxValues = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = maxValues;
        if (temp >= maxValues) {
            maxValues = temp;
        }
    }
    return arr;
}
