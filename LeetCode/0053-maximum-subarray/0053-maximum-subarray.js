/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let maxLast = nums[0]
  for (let i = 1; i < nums.length; i++) {
    maxLast = Math.max(nums[i], maxLast + nums[i])
    maxSum = Math.max(maxSum, maxLast)
  }

  return maxSum
};