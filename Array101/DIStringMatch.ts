import { test } from "../Testing/unitTest";
test("IDID", [0, 4, 1, 3, 2], diStringMatch);
test("III", [0, 1, 2, 3], diStringMatch);
test("DDI", [3, 2, 0, 1], diStringMatch);
function diStringMatch(s: string): number[] {
    let left = 0;
    let right = s.length;
    let ans: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "I") {
            ans.push(left++);
        } else if (s[i] == "D") {
            ans.push(right--);
        }
    }
    ans.push(left);
    return ans;
}
