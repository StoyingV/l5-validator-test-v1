export default class NumberSchema {
  validators = [(data) => typeof data === 'number'];

  isValid(data) {
    const answer = this.validators.map((validator) => validator(data));
    return !answer.includes(false);
  }

  even() {
    const validator = (data) => data % 2 === 0;
    this.validators.push(validator);
    return this;
  }

  odd() {
    const validator = (data) => data % 2 !== 0;
    this.validators.push(validator);
    return this;
  }
}
