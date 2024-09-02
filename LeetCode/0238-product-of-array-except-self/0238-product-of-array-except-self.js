/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [];
  const right = [];

  nums.forEach((num) => {
    if (left.length === 0) {
      left.push(num);
      return;
    }

    left.push(left[left.length - 1] * num);
  });

  nums.reverse().forEach((num) => {
    if (right.length === 0) {
      right.push(num);
      return;
    }

    right.push(right[right.length - 1] * num);
  });

  return nums.map((num, index) => {
    return (left[index - 1] ?? 1) * (right[nums.length - 2 - index] ?? 1)
  })
};