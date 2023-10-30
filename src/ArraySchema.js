import _ from 'lodash';

export default class ArraySchema {
  validators = [(data) => Array.isArray(data)];

  isValid(data) {
    const answer = this.validators.map((validator) => validator(data));
    return !answer.includes(false);
  }

  length(num) {
    const validator = (data) => (_.isNull(data) ? false : data.length === num);
    this.validators.push(validator);
    return this;
  }
}
