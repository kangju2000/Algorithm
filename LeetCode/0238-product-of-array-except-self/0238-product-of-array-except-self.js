/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let zeroCount = [];
  const product = nums.reduce((acc, cur, index) => {
    if (cur === 0) {
      zeroCount.push({ index });
      return acc;
    }

    return acc * cur;
  }, 1);

  if (zeroCount.length > 1) {
    return Array.from({ length: nums.length }).fill(0);
  }

  if (zeroCount.length === 1) {
    return nums.map((num, index) => {
      if (index === zeroCount[0].index) {
        return product;
      }

      return 0;
    });
  }

  return nums.map((num) => product / num);
};