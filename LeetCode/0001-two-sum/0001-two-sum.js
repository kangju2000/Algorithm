/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return i > obj[nums[i]] ? [obj[nums[i]], i] : [i, obj[nums[i]]];
    }

    obj[target - nums[i]] = i
  }
};
