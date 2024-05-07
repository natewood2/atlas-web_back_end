import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Must be a number.');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number.');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number.');
    }
    if (!(amount instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency.');
    }
    return amount * conversionRate;
  }
}
