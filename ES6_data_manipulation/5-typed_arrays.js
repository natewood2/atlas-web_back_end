function createInt8TypedArray(length, position, value) {
  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const int8 = new Int8Array(length);

  int8[position] = value;

  return int8.buffer;
}

export default createInt8TypedArray;
