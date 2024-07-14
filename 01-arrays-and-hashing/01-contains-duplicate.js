/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numLen = nums.length;
  const setLen = new Set(nums).size;
  console.log({
    nums,
    set: new Set(nums).size,
  });
  if (numLen != setLen) {
    return true;
  }
  return false;
};

const containsDuplicateShorter = (nums) => {
  const nset = new Set(nums);
  return nums.length > nset.size ? true : false;
};

console.log(containsDuplicateShorter([1, 2, 3, 1]));
console.log(containsDuplicateShorter([1, 2, 3, 4]));
console.log(containsDuplicateShorter([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
