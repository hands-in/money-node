import {Money} from '../@types/Money';
import {Currency} from '../@types/Currency';
import {ExchangeRates} from '../@types/ExchangeRates';
import LocalMoneyCalculator from '../local/LocalMoneyCalculator';
import LocalMoney from '../local/LocalMoney';
import Comparator from '../@types/Comparator';

export default class GlobalMoney implements Comparator<Money>, Money {
  readonly amount: number;

  readonly currency: Currency;

  private readonly localMoney: LocalMoney;

  private readonly fx: ExchangeRates;

  constructor(money: Money, fx: ExchangeRates) {
    this.localMoney = new LocalMoney(money);
    this.amount = money.amount;
    this.currency = money.currency;
    this.fx = fx;
  }

  compare(otherData: Money): number {
    return this.localMoney.compare(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  eq(otherData: Money): boolean {
    return this.localMoney.eq(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  lte(otherData: Money): boolean {
    return this.localMoney.lte(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  gte(otherData: Money): boolean {
    return this.localMoney.gte(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  lt(otherData: Money): boolean {
    return this.localMoney.lt(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  gt(otherData: Money): boolean {
    return this.localMoney.gt(
      new GlobalMoney(otherData, this.fx).convertTo(this.currency)
    );
  }

  convertTo(toCurrency: Currency): GlobalMoney {
    // if currency does not need conversion
    if (this.currency === toCurrency) {
      return this;
    }
    const fxRate = this.getFxRate(this.currency, toCurrency);
    const convertedMoney = new LocalMoneyCalculator({
      amount: this.amount,
      currency: toCurrency,
    })
      .multiply(fxRate)
      .calculate();
    return new GlobalMoney(convertedMoney, this.fx);
  }

  // ==========================================================================

  private getFxRate(from: Currency, to: Currency) {
    const {rates} = this.fx;

    // Make sure the base rate is in the rates object:
    rates[this.fx.base] = 1;

    // Throw an error if either raste is 0
    if (rates[to] === 0 || rates[from] === 0) {
      throw new Error(
        `Failed to convert money from (${from}) to (${to}) because one or both of the currencies exchange rate is 0`
      );
    }

    // Throw an error if either rate isn't in the rates array
    if (!rates[to] || !rates[from]) {
      throw new Error(
        `Failed to convert money from (${from}) to (${to}) because one or both of the currencies could not be found in the exchangeRates`
      );
    }

    // If `from` currency === fx.base, return the basic exchange rate for the `to` currency
    if (from === this.fx.base) {
      return rates[to];
    }

    // If `to` currency === fx.base, return the basic inverse rate of the `from` currency
    if (to === this.fx.base) {
      return 1 / rates[from];
    }

    // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies
    return rates[to] * (1 / rates[from]);
  }
}
