export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a new DataView of the buffer
  const dataView = new DataView(buffer);

  // Step 3: Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Step 4: Set the value at the specified position
  dataView.setInt8(position, value);

  // Step 5: Return the DataView
  return dataView;
}
