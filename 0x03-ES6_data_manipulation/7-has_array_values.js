export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) return false;
  }

  return true;

  // II- Second Solution
  // 1- Convert the set to an array
  // const setArray = Array.from(set);

  // 2- Iterate through the array to check if the setArray includes the value from the given array
  // for (const value of array) {
  // if (!setArray.includes(value)) return false;
  // }

  // 3- return true if set has all the values from the given array
  // return true;
}
