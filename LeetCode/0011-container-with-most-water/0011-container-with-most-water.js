/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const r = (right - left) * Math.min(height[left], height[right]);

    if (r > result) {
      result = r;
    }
    
    height[left] > height[right] ? right-- : left++;
  }

  return result;
};