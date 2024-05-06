export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number') {
      throw new TypeError('err');
    }
    this._name = name;
    this._length = length;
    this._students = this._checkArrayOfStrings(students, 'students');
  }
  _checkArrayOfStrings(value, attributeName) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
        throw new TypeError('err');
    }
    return value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number')
    }
    this._length = value;
  }
  get students() {
    return this._studentsl
  }
  set students(value) {
    this._students = this._checkArrayOfStrings(value, 'students');
  }
}
