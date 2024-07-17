/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumQuadratic(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSumLinear(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(nums[i], i);
  }
}

console.log(twoSumLinear([2, 7, 11, 5], 9));
console.log(twoSumLinear([3, 2, 4], 6));
console.log(twoSumLinear([2, 5, 5, 11], 10));
