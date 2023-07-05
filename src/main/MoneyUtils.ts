import {Currency} from './@types/Currency';
import {Money} from './@types/Money';
import CurrencyUtils from './currency/CurrencyUtils';

interface FormatMoneyOptions {
  locales?: string | string[];
  includeCurrencyCode?: boolean;
}

export default class MoneyUtils {
  constructor(private readonly money: Money) {}

  toString(options?: FormatMoneyOptions): string {
    return MoneyUtils.formatMoney(this.money, options);
  }

  getCurrencySymbol(options?: {locales?: string | string[]}): string {
    return CurrencyUtils.getCurrencySymbol(this.money.currency, options);
  }

  getMoneyAsFloat(): string {
    return MoneyUtils.getMoneyAsFloat(this.money);
  }

  static formatMoney(money: Money, options?: FormatMoneyOptions): string {
    const floatAmount = Number(this.getMoneyAsFloat(money));

    const currencyCode = money.currency.toUpperCase();

    const formattedFloatMoney = Intl.NumberFormat(options?.locales, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: options?.includeCurrencyCode ? 'symbol' : 'narrowSymbol',
    }).format(floatAmount);

    return formattedFloatMoney;
  }

  static getMoneyAsFloat(money: Money): string {
    const decimalPoints = CurrencyUtils.getCurrencyDecimalPlaces(
      money.currency
    );
    const minorUnit = 10 ** decimalPoints;

    return (money.amount / minorUnit).toFixed(decimalPoints);
  }

  static convertFloatToMoney(
    float: string | number,
    currency: Currency
  ): Money {
    const decimalPoints = CurrencyUtils.getCurrencyDecimalPlaces(currency);
    const minorUnit = 10 ** decimalPoints;
    const floatString = (
      typeof float === 'number' ? float : Number(float)
    ).toFixed(decimalPoints);

    return {amount: Number(floatString) * minorUnit, currency};
  }
}
