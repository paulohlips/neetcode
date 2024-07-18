/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      continue;
    }

    map[nums[i]] = map[nums[i]] + 1;
  }

  const values = Object.entries(map).sort();
  console.log(values);
  const values = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let j = 0; j < k; j++) {
    result.push(values[j][0]);
  }
  return result;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
