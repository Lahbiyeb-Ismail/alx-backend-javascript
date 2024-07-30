export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) throw new Error('Cannot process');

  for (const item of groceriesMap) {
    if (item[1] === 1) groceriesMap.set(item[0], 100);
  }
}
