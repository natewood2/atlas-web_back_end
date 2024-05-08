function createInt8TypedArray(length, position, value) {
  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);

  const dataView = new DataView(arrayBuffer);

  dataView.setInt8(position, value);
  return arrayBuffer;
}

export default createInt8TypedArray;
