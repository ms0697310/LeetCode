removeElement([3, 2, 2, 3], 3);
function removeElement(nums: number[], val: number): number {
    let ptr = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != val) {
            nums[ptr++] = nums[index];
        }
    }
    return ptr;
}
