export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) return '';

  return [...set]
    .filter((str) => (str.startsWith(startString)))
    .map((str) => (str.slice(startString.length)))
    .join('-');
}
