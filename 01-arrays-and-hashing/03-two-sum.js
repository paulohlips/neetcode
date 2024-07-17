/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumQuadratic(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSumQuadratic([2, 7, 11, 5], 9));
console.log(twoSumQuadratic([3, 2, 4], 6));
