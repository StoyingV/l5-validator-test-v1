export default class ObjectSchema {
  shape(fields) {
    this.fields = fields;
    return this;
  }

  isValid(object) {
    const currentKeys = Object.keys(object);
    if (currentKeys.length !== Object.keys(this.fields).length) {
      return false;
    }
    const answer = currentKeys.map((key) => this.fields[key].isValid(object[key]));
    return !answer.includes(false);
  }
}
