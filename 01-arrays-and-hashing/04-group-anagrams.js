/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const sortStng = (stgn) => {
  return stgn.split("").sort().join("");
};

const groupAnagrams = (strs) => {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStng = sortStng(strs[i]);
    if (map.has(sortedStng)) {
      map.set(sortedStng, [...map.get(sortedStng), strs[i]]);
      continue;
    }
    map.set(sortedStng, [strs[i]]);
  }
  const result = [];
  for (value of map.values()) {
    result.push(value);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
