import {Currency} from '../@types/Currency';
import {Money} from '../@types/Money';
import Comparator from '../@types/Comparator';

export default class LocalMoney implements Comparator<Money>, Money {
  readonly amount: number;

  readonly currency: Currency;

  constructor(
    money: Money,
    private readonly currencyMismatchErrorMessage?: string
  ) {
    this.amount = money.amount;
    this.currency = money.currency;
  }

  compare(otherMoney: Money): number {
    this.validateSameCurrency(otherMoney);
    return this.amount - otherMoney.amount;
  }

  /**
   * @param otherMoney money object
   * @param currencyMismatchErrorMessage optional error message to throw when currencies do not match
   *
   * @return true if this.amount == otherMoney.amount
   * @throws BadRequestError if currencies do not match
   */
  eq(otherMoney: Money): boolean {
    return this.compare(otherMoney) === 0;
  }

  /**
   * @param otherMoney money object
   * @param currencyMismatchErrorMessage optional error message to throw when currencies do not match
   *
   * @return true if this.amount <= otherMoney.amount
   * @throws BadRequestError if currencies do not match
   */
  lte(otherMoney: Money): boolean {
    return this.compare(otherMoney) <= 0;
  }

  /**
   * @param otherMoney money object
   * @param currencyMismatchErrorMessage optional error message to throw when currencies do not match
   *
   * @return true if this.amount >= otherMoney.amount
   * @throws BadRequestError if currencies do not match
   */
  gte(otherMoney: Money): boolean {
    return this.compare(otherMoney) >= 0;
  }

  /**
   * @param otherMoney money object
   * @param currencyMismatchErrorMessage optional error message to throw when currencies do not match
   *
   * @return true if this.amount < otherMoney.amount
   * @throws BadRequestError if currencies do not match
   */
  lt(otherMoney: Money): boolean {
    return this.compare(otherMoney) < 0;
  }

  /**
   * @param otherMoney money object
   * @param currencyMismatchErrorMessage optional error message to throw when currencies do not match
   *
   * @return true if this.amount > otherMoney.amount
   * @throws BadRequestError if currencies do not match
   */
  gt(otherMoney: Money): boolean {
    return this.compare(otherMoney) > 0;
  }

  private isSameCurrency(otherMoney: Money): boolean {
    return this.currency === otherMoney.currency;
  }

  private validateSameCurrency(otherMoney: Money): void {
    if (!this.isSameCurrency(otherMoney)) {
      throw new Error(
        `${
          this.currencyMismatchErrorMessage ??
          'The currencies of two money objects were not the same'
        } (expected ${this.currency} but got ${otherMoney.currency})`
      );
    }
  }

  static compare(m1: Money, m2: Money): number {
    new this(m1).validateSameCurrency(m2);
    return m1.amount - m2.amount;
  }

  /**
   * @param m1 money object
   * @param m2 money object
   *
   * @return true if m1.amount == m2.amount
   * @throws BadRequestError if currencies do not match
   */
  static eq(m1: Money, m2: Money): boolean {
    return this.compare(m1, m2) === 0;
  }

  /**
   * @param m1 money object
   * @param m2 money object
   *
   * @return true if m1.amount <= m2.amount
   * @throws BadRequestError if currencies do not match
   */
  static lte(m1: Money, m2: Money): boolean {
    return this.compare(m1, m2) <= 0;
  }

  /**
   * @param m1 money object
   * @param m2 money object
   *
   * @return true if m1.amount >= m2.amount
   * @throws BadRequestError if currencies do not match
   */
  static gte(m1: Money, m2: Money): boolean {
    return this.compare(m1, m2) >= 0;
  }

  /**
   * @param m1 money object
   * @param m2 money object
   *
   * @return true if m1.amount < m2.amount
   * @throws BadRequestError if currencies do not match
   */
  static lt(m1: Money, m2: Money): boolean {
    return this.compare(m1, m2) < 0;
  }

  /**
   * @param m1 money object
   * @param m2 money object
   *
   * @return true if m1.amount > m2.amount
   * @throws BadRequestError if currencies do not match
   */
  static gt(m1: Money, m2: Money): boolean {
    return this.compare(m1, m2) > 0;
  }
}
