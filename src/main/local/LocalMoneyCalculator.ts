import {Big} from 'big.js';
import {Currency} from '../@types/Currency';
import {Money} from '../@types/Money';
import MoneyCalculator from '../@types/MoneyCalculator';

export default class LocalMoneyCalculator implements MoneyCalculator<Money> {
  private amount: number;

  private currency: Currency;

  constructor(money: Money) {
    this.amount = money.amount;
    this.currency = money.currency;
  }

  divide(float: number): LocalMoneyCalculator {
    // safeguard divide by zero error
    if (float === 0) {
      return this;
    }

    const bigResult = new Big(this.amount).div(new Big(float));

    this.amount = Math.ceil(bigResult.toNumber());

    return this;
  }

  multiply(float: number): LocalMoneyCalculator {
    const bigResult = new Big(this.amount).mul(new Big(float));

    this.amount = Math.ceil(bigResult.toNumber());

    return this;
  }

  add(money: Money): LocalMoneyCalculator {
    this.checkCurrencyMatches(money);

    const bigResult = new Big(this.amount).add(new Big(money.amount));

    this.amount = Math.ceil(bigResult.toNumber());

    return this;
  }

  subtract(money: Money): LocalMoneyCalculator {
    this.checkCurrencyMatches(money);

    const bigResult = new Big(this.amount).sub(new Big(money.amount));

    this.amount = Math.ceil(bigResult.toNumber());

    return this;
  }

  calculate(): Money {
    return {amount: this.amount, currency: this.currency};
  }

  /* HELPER FUNCTION */
  private checkCurrencyMatches(money: Money): void {
    if (this.currency !== money.currency) {
      throw new Error(
        `CURRENCY_MISMATCH ${this.currency} with ${money.currency}`
      );
    }
  }
}
