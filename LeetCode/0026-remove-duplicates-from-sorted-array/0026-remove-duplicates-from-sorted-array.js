/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const uniqueArr = [];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (uniqueArr[uniqueArr.length - 1] === nums[i]) {
      continue;
    }
    uniqueArr.push(nums[i]);
    nums[index] = nums[i];
    index++;
  }

  return uniqueArr.length;
};