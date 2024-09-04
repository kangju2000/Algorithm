/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length - 1;

    if (nums.length === 1 && nums[left] !== val) {
        return 1;
    }

    while (left <= right) {
        if (nums[left] === val) {
            while (nums[right] === val) right--;
            if (left > right) {
                break;
            }
            nums[left] = nums[right];
            nums[right] = val;
        }
        
        left++;
    }

    return left;
};