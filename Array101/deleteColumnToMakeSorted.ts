import { test } from "../Testing/unitTest";
test(["cba", "daf", "ghi"], 1, minDeletionSize);
test(["a", "b"], 0, minDeletionSize);
test(["zyx", "wvu", "tsr"], 3, minDeletionSize);
function minDeletionSize(strs: string[]): number {
    let length = strs[0].length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let j;
        for (j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                break;
            }
        }
        count += +(j != strs.length - 1);
    }
    return count;
}
