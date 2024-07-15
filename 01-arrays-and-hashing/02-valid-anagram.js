/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isValidAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  if (sortedS !== sortedT) {
    return false;
  }

  return true;
};

console.log(isValidAnagram("car", "rat"));
console.log(isValidAnagram("anagram", "nagaram"));
