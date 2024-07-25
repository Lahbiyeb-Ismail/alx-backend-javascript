/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // The valueOf method is overridden to return the
  // _size attribute when the object is cast to a number.
  valueOf() {
    return this._size;
  }

  // The toString method is overridden to return the
  // _location attribute when the object is cast to a string.
  toString() {
    return this._location;
  }
}
