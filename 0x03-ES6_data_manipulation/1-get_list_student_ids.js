export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];

  const arrayOfIds = array.map((array) => array.id);

  return arrayOfIds;
}
