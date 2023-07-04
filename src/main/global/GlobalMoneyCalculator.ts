import {Money} from '../@types/Money';
import {ExchangeRates} from '../@types/ExchangeRates';
import MoneyCalculator from '../@types/MoneyCalculator';
import GlobalMoney from './GlobalMoney';
import LocalMoneyCalculator from '../local/LocalMoneyCalculator';

export default class GlobalMoneyCalculator implements MoneyCalculator<Money> {
  private money: Money;

  private readonly fx: ExchangeRates;

  private readonly localMoneyCalculator: LocalMoneyCalculator;

  constructor(money: Money, fx: ExchangeRates) {
    this.money = money;
    this.localMoneyCalculator = new LocalMoneyCalculator(money);
    this.fx = fx;
  }

  add(money: Money): GlobalMoneyCalculator {
    const convertedMoney = new GlobalMoney(money, this.fx).convertTo(
      this.money.currency
    );

    this.money = this.localMoneyCalculator.add(convertedMoney).calculate();

    return this;
  }

  subtract(money: Money): GlobalMoneyCalculator {
    const convertedMoney = new GlobalMoney(money, this.fx).convertTo(
      this.money.currency
    );

    this.money = this.localMoneyCalculator.subtract(convertedMoney).calculate();

    return this;
  }

  divide(float: number): GlobalMoneyCalculator {
    this.money = this.localMoneyCalculator.divide(float).calculate();

    return this;
  }

  multiply(float: number): GlobalMoneyCalculator {
    this.money = this.localMoneyCalculator.multiply(float).calculate();

    return this;
  }

  calculate(): GlobalMoney {
    return new GlobalMoney(this.money, this.fx);
  }
}
