import {Currency} from '~/@types/Currency';
import {MoneyUtils} from '~/index';

describe('Money Utils', () => {
  it('expect formatMoney to return £300.00 when input is 300_00GBP', () => {
    const THREE_POUNDS = {amount: 300_00, currency: Currency.GBP};

    expect(MoneyUtils.formatMoney(THREE_POUNDS)).toEqual('£300.00');
  });

  it('expect formatMoney to return ¥30,000 when input is 30000JPY', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN)).toEqual('¥30,000');
  });

  it('expect formatMoney to return "JPY ¥30,000" when input is 30000JPY and includeCurrencyCode is true', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(
      MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN, {includeCurrencyCode: true})
    ).toEqual('JPY ¥30,000');
  });
});
