import { test } from "../Testing/unitTest";
test([2, 1], false, validMountainArray);
test([3, 5, 5], false, validMountainArray);
test([0, 3, 2, 1], true, validMountainArray);
function validMountainArray(arr: number[]): boolean {
    let i = 0;
    while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
        i++;
    }
    if (i == 0 || i == arr.length - 1) return false;
    while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
        i++;
    }
    return i == arr.length - 1;
}
