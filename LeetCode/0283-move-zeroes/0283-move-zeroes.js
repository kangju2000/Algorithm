/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let currentIndex = 0;
    while (left < right) {
        if (nums[currentIndex] === 0) {
            while (left < right && nums[left] === 0) left++;
            if (left === nums.length) {
                return;
            }
            nums[currentIndex] = nums[left]
            nums[left] = 0;
        }

        currentIndex++;
    }

    return;
};