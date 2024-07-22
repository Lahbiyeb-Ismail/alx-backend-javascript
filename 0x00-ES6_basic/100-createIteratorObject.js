export default function createIteratorObject(report) {
  // eslint-disable-next-line guard-for-in
  const employees = [];
  const { allEmployees } = report;
  for (const key in allEmployees) {
    if (key) {
      allEmployees[key].forEach((_, index) => {
        employees.push(allEmployees[key][index]);
      });
    }
  }

  return employees;
}
