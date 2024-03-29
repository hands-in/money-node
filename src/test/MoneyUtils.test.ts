import {Currency} from '~/@types/Currency';
import {MoneyUtils} from '~/index';

describe('Money Utils (locale = en-GB)', () => {
  const LOCALE = 'en-GB';

  it('expect formatMoney to return £300.00 when input is 300_00GBP', () => {
    const THREE_POUNDS = {amount: 300_00, currency: Currency.GBP};

    expect(MoneyUtils.formatMoney(THREE_POUNDS, {locales: LOCALE})).toEqual(
      '£300.00'
    );
  });

  it('expect formatMoney to return ¥30,000 when input is 30000JPY', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(
      MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN, {locales: LOCALE})
    ).toEqual('¥30,000');
  });

  it('expect formatMoney to return "JP¥30,000" when input is 30000JPY and includeCurrencyCode is true', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(
      MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN, {
        locales: LOCALE,
        includeCurrencyCode: true,
      })
    ).toEqual('JP¥30,000');
  });
});
