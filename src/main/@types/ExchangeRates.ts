import {Currency} from './Currency';

export type ExchangeRates = {base: Currency; date: Date} & {
  rates: Record<Currency, number>;
};
