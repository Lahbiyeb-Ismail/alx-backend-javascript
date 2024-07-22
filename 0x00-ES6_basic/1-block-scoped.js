/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = false;
    const task2 = true;

    return [task, task2];
  }

  return [task, task2];
}
