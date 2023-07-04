import {Currency} from '../@types/Currency';
import currencyDataMap from './currency-data-map';

export default class CurrencyUtils {
  constructor(private readonly currency: Currency) {}

  getCurrencySymbol(options?: {locales?: string | string[]}): string {
    return CurrencyUtils.getCurrencySymbol(this.currency, options);
  }

  static getCurrencyDecimalPlaces(currency: Currency): number {
    return currencyDataMap[currency].decimalPlaces;
  }

  static getCurrencySymbol(
    currency: Currency,
    options?: {locales?: string | string[]}
  ): string {
    const internalCurrencySymbol = currencyDataMap[currency].symbol;
    if (internalCurrencySymbol) {
      return internalCurrencySymbol;
    }

    const intlCurrencySymbol = Intl.NumberFormat(options?.locales, {
      style: 'currency',
      currency: currency.toUpperCase(),
    })
      .formatToParts(0)
      .find(part => part.type === 'currency')?.value;
    if (intlCurrencySymbol) {
      return intlCurrencySymbol;
    }

    throw new Error(`Could not find the symbol of the currency ${currency}`);
  }
}
