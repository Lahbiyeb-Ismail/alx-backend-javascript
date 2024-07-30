export default function groceriesList() {
  const groceriesArrayObj = [
    { name: 'Apples', qty: 10 },
    { name: 'Tomatoes', qty: 10 },
    { name: 'Pasta', qty: 1 },
    { name: 'Rice', qty: 1 },
    { name: 'Banana', qty: 5 },
  ];
  const groceriesMap = new Map();

  for (const item of groceriesArrayObj) {
    groceriesMap.set(item.name, item.qty);
  }

  return groceriesMap;
}
