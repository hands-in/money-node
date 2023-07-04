import {Currency} from '../@types/Currency';
import {CurrencySymbol} from './CurrencySymbol';
import {CurrencyDecimals} from './CurrencyDecimals';

interface CurrencyData {
  decimalPlaces: number;
  symbol: string;
}

const currencyDataMap: Record<Currency, CurrencyData> = {
  AED: {
    decimalPlaces: CurrencyDecimals[Currency.AED],
    symbol: CurrencySymbol[Currency.AED],
  },
  AFN: {
    decimalPlaces: CurrencyDecimals[Currency.AFN],
    symbol: CurrencySymbol[Currency.AFN],
  },
  ALL: {
    decimalPlaces: CurrencyDecimals[Currency.ALL],
    symbol: CurrencySymbol[Currency.ALL],
  },
  AMD: {
    decimalPlaces: CurrencyDecimals[Currency.AMD],
    symbol: CurrencySymbol[Currency.AMD],
  },
  ANG: {
    decimalPlaces: CurrencyDecimals[Currency.ANG],
    symbol: CurrencySymbol[Currency.ANG],
  },
  AOA: {
    decimalPlaces: CurrencyDecimals[Currency.AOA],
    symbol: CurrencySymbol[Currency.AOA],
  },
  ARS: {
    decimalPlaces: CurrencyDecimals[Currency.ARS],
    symbol: CurrencySymbol[Currency.ARS],
  },
  AUD: {
    decimalPlaces: CurrencyDecimals[Currency.AUD],
    symbol: CurrencySymbol[Currency.AUD],
  },
  AWG: {
    decimalPlaces: CurrencyDecimals[Currency.AWG],
    symbol: CurrencySymbol[Currency.AWG],
  },
  AZN: {
    decimalPlaces: CurrencyDecimals[Currency.AZN],
    symbol: CurrencySymbol[Currency.AZN],
  },
  BAM: {
    decimalPlaces: CurrencyDecimals[Currency.BAM],
    symbol: CurrencySymbol[Currency.BAM],
  },
  BBD: {
    decimalPlaces: CurrencyDecimals[Currency.BBD],
    symbol: CurrencySymbol[Currency.BBD],
  },
  BDT: {
    decimalPlaces: CurrencyDecimals[Currency.BDT],
    symbol: CurrencySymbol[Currency.BDT],
  },
  BGN: {
    decimalPlaces: CurrencyDecimals[Currency.BGN],
    symbol: CurrencySymbol[Currency.BGN],
  },
  BHD: {
    decimalPlaces: CurrencyDecimals[Currency.BHD],
    symbol: CurrencySymbol[Currency.BHD],
  },
  BIF: {
    decimalPlaces: CurrencyDecimals[Currency.BIF],
    symbol: CurrencySymbol[Currency.BIF],
  },
  BMD: {
    decimalPlaces: CurrencyDecimals[Currency.BMD],
    symbol: CurrencySymbol[Currency.BMD],
  },
  BND: {
    decimalPlaces: CurrencyDecimals[Currency.BND],
    symbol: CurrencySymbol[Currency.BND],
  },
  BOB: {
    decimalPlaces: CurrencyDecimals[Currency.BOB],
    symbol: CurrencySymbol[Currency.BOB],
  },
  BRL: {
    decimalPlaces: CurrencyDecimals[Currency.BRL],
    symbol: CurrencySymbol[Currency.BRL],
  },
  BSD: {
    decimalPlaces: CurrencyDecimals[Currency.BSD],
    symbol: CurrencySymbol[Currency.BSD],
  },
  BTN: {
    decimalPlaces: CurrencyDecimals[Currency.BTN],
    symbol: CurrencySymbol[Currency.BTN],
  },
  BWP: {
    decimalPlaces: CurrencyDecimals[Currency.BWP],
    symbol: CurrencySymbol[Currency.BWP],
  },
  BYN: {
    decimalPlaces: CurrencyDecimals[Currency.BYN],
    symbol: CurrencySymbol[Currency.BYN],
  },
  BZD: {
    decimalPlaces: CurrencyDecimals[Currency.BZD],
    symbol: CurrencySymbol[Currency.BZD],
  },
  CAD: {
    decimalPlaces: CurrencyDecimals[Currency.CAD],
    symbol: CurrencySymbol[Currency.CAD],
  },
  CDF: {
    decimalPlaces: CurrencyDecimals[Currency.CDF],
    symbol: CurrencySymbol[Currency.CDF],
  },
  CHF: {
    decimalPlaces: CurrencyDecimals[Currency.CHF],
    symbol: CurrencySymbol[Currency.CHF],
  },
  CLP: {
    decimalPlaces: CurrencyDecimals[Currency.CLP],
    symbol: CurrencySymbol[Currency.CLP],
  },
  CNY: {
    decimalPlaces: CurrencyDecimals[Currency.CNY],
    symbol: CurrencySymbol[Currency.CNY],
  },
  COP: {
    decimalPlaces: CurrencyDecimals[Currency.COP],
    symbol: CurrencySymbol[Currency.COP],
  },
  CRC: {
    decimalPlaces: CurrencyDecimals[Currency.CRC],
    symbol: CurrencySymbol[Currency.CRC],
  },
  CUC: {
    decimalPlaces: CurrencyDecimals[Currency.CUC],
    symbol: CurrencySymbol[Currency.CUC],
  },
  CUP: {
    decimalPlaces: CurrencyDecimals[Currency.CUP],
    symbol: CurrencySymbol[Currency.CUP],
  },
  CVE: {
    decimalPlaces: CurrencyDecimals[Currency.CVE],
    symbol: CurrencySymbol[Currency.CVE],
  },
  CZK: {
    decimalPlaces: CurrencyDecimals[Currency.CZK],
    symbol: CurrencySymbol[Currency.CZK],
  },
  DJF: {
    decimalPlaces: CurrencyDecimals[Currency.DJF],
    symbol: CurrencySymbol[Currency.DJF],
  },
  DKK: {
    decimalPlaces: CurrencyDecimals[Currency.DKK],
    symbol: CurrencySymbol[Currency.DKK],
  },
  DOP: {
    decimalPlaces: CurrencyDecimals[Currency.DOP],
    symbol: CurrencySymbol[Currency.DOP],
  },
  DZD: {
    decimalPlaces: CurrencyDecimals[Currency.DZD],
    symbol: CurrencySymbol[Currency.DZD],
  },
  EGP: {
    decimalPlaces: CurrencyDecimals[Currency.EGP],
    symbol: CurrencySymbol[Currency.EGP],
  },
  ERN: {
    decimalPlaces: CurrencyDecimals[Currency.ERN],
    symbol: CurrencySymbol[Currency.ERN],
  },
  ETB: {
    decimalPlaces: CurrencyDecimals[Currency.ETB],
    symbol: CurrencySymbol[Currency.ETB],
  },
  EUR: {
    decimalPlaces: CurrencyDecimals[Currency.EUR],
    symbol: CurrencySymbol[Currency.EUR],
  },
  FJD: {
    decimalPlaces: CurrencyDecimals[Currency.FJD],
    symbol: CurrencySymbol[Currency.FJD],
  },
  FKP: {
    decimalPlaces: CurrencyDecimals[Currency.FKP],
    symbol: CurrencySymbol[Currency.FKP],
  },
  GBP: {
    decimalPlaces: CurrencyDecimals[Currency.GBP],
    symbol: CurrencySymbol[Currency.GBP],
  },
  GEL: {
    decimalPlaces: CurrencyDecimals[Currency.GEL],
    symbol: CurrencySymbol[Currency.GEL],
  },
  GHS: {
    decimalPlaces: CurrencyDecimals[Currency.GHS],
    symbol: CurrencySymbol[Currency.GHS],
  },
  GIP: {
    decimalPlaces: CurrencyDecimals[Currency.GIP],
    symbol: CurrencySymbol[Currency.GIP],
  },
  GMD: {
    decimalPlaces: CurrencyDecimals[Currency.GMD],
    symbol: CurrencySymbol[Currency.GMD],
  },
  GNF: {
    decimalPlaces: CurrencyDecimals[Currency.GNF],
    symbol: CurrencySymbol[Currency.GNF],
  },
  GTQ: {
    decimalPlaces: CurrencyDecimals[Currency.GTQ],
    symbol: CurrencySymbol[Currency.GTQ],
  },
  GYD: {
    decimalPlaces: CurrencyDecimals[Currency.GYD],
    symbol: CurrencySymbol[Currency.GYD],
  },
  HKD: {
    decimalPlaces: CurrencyDecimals[Currency.HKD],
    symbol: CurrencySymbol[Currency.HKD],
  },
  HNL: {
    decimalPlaces: CurrencyDecimals[Currency.HNL],
    symbol: CurrencySymbol[Currency.HNL],
  },
  HRK: {
    decimalPlaces: CurrencyDecimals[Currency.HRK],
    symbol: CurrencySymbol[Currency.HRK],
  },
  HTG: {
    decimalPlaces: CurrencyDecimals[Currency.HTG],
    symbol: CurrencySymbol[Currency.HTG],
  },
  HUF: {
    decimalPlaces: CurrencyDecimals[Currency.HUF],
    symbol: CurrencySymbol[Currency.HUF],
  },
  IDR: {
    decimalPlaces: CurrencyDecimals[Currency.IDR],
    symbol: CurrencySymbol[Currency.IDR],
  },
  ILS: {
    decimalPlaces: CurrencyDecimals[Currency.ILS],
    symbol: CurrencySymbol[Currency.ILS],
  },
  INR: {
    decimalPlaces: CurrencyDecimals[Currency.INR],
    symbol: CurrencySymbol[Currency.INR],
  },
  IQD: {
    decimalPlaces: CurrencyDecimals[Currency.IQD],
    symbol: CurrencySymbol[Currency.IQD],
  },
  IRR: {
    decimalPlaces: CurrencyDecimals[Currency.IRR],
    symbol: CurrencySymbol[Currency.IRR],
  },
  ISK: {
    decimalPlaces: CurrencyDecimals[Currency.ISK],
    symbol: CurrencySymbol[Currency.ISK],
  },
  JMD: {
    decimalPlaces: CurrencyDecimals[Currency.JMD],
    symbol: CurrencySymbol[Currency.JMD],
  },
  JOD: {
    decimalPlaces: CurrencyDecimals[Currency.JOD],
    symbol: CurrencySymbol[Currency.JOD],
  },
  JPY: {
    decimalPlaces: CurrencyDecimals[Currency.JPY],
    symbol: CurrencySymbol[Currency.JPY],
  },
  KES: {
    decimalPlaces: CurrencyDecimals[Currency.KES],
    symbol: CurrencySymbol[Currency.KES],
  },
  KGS: {
    decimalPlaces: CurrencyDecimals[Currency.KGS],
    symbol: CurrencySymbol[Currency.KGS],
  },
  KHR: {
    decimalPlaces: CurrencyDecimals[Currency.KHR],
    symbol: CurrencySymbol[Currency.KHR],
  },
  KMF: {
    decimalPlaces: CurrencyDecimals[Currency.KMF],
    symbol: CurrencySymbol[Currency.KMF],
  },
  KPW: {
    decimalPlaces: CurrencyDecimals[Currency.KPW],
    symbol: CurrencySymbol[Currency.KPW],
  },
  KRW: {
    decimalPlaces: CurrencyDecimals[Currency.KRW],
    symbol: CurrencySymbol[Currency.KRW],
  },
  KWD: {
    decimalPlaces: CurrencyDecimals[Currency.KWD],
    symbol: CurrencySymbol[Currency.KWD],
  },
  KYD: {
    decimalPlaces: CurrencyDecimals[Currency.KYD],
    symbol: CurrencySymbol[Currency.KYD],
  },
  KZT: {
    decimalPlaces: CurrencyDecimals[Currency.KZT],
    symbol: CurrencySymbol[Currency.KZT],
  },
  LAK: {
    decimalPlaces: CurrencyDecimals[Currency.LAK],
    symbol: CurrencySymbol[Currency.LAK],
  },
  LBP: {
    decimalPlaces: CurrencyDecimals[Currency.LBP],
    symbol: CurrencySymbol[Currency.LBP],
  },
  LKR: {
    decimalPlaces: CurrencyDecimals[Currency.LKR],
    symbol: CurrencySymbol[Currency.LKR],
  },
  LRD: {
    decimalPlaces: CurrencyDecimals[Currency.LRD],
    symbol: CurrencySymbol[Currency.LRD],
  },
  LSL: {
    decimalPlaces: CurrencyDecimals[Currency.LSL],
    symbol: CurrencySymbol[Currency.LSL],
  },
  LYD: {
    decimalPlaces: CurrencyDecimals[Currency.LYD],
    symbol: CurrencySymbol[Currency.LYD],
  },
  MAD: {
    decimalPlaces: CurrencyDecimals[Currency.MAD],
    symbol: CurrencySymbol[Currency.MAD],
  },
  MDL: {
    decimalPlaces: CurrencyDecimals[Currency.MDL],
    symbol: CurrencySymbol[Currency.MDL],
  },
  MGA: {
    decimalPlaces: CurrencyDecimals[Currency.MGA],
    symbol: CurrencySymbol[Currency.MGA],
  },
  MKD: {
    decimalPlaces: CurrencyDecimals[Currency.MKD],
    symbol: CurrencySymbol[Currency.MKD],
  },
  MMK: {
    decimalPlaces: CurrencyDecimals[Currency.MMK],
    symbol: CurrencySymbol[Currency.MMK],
  },
  MNT: {
    decimalPlaces: CurrencyDecimals[Currency.MNT],
    symbol: CurrencySymbol[Currency.MNT],
  },
  MOP: {
    decimalPlaces: CurrencyDecimals[Currency.MOP],
    symbol: CurrencySymbol[Currency.MOP],
  },
  MRU: {
    decimalPlaces: CurrencyDecimals[Currency.MRU],
    symbol: CurrencySymbol[Currency.MRU],
  },
  MUR: {
    decimalPlaces: CurrencyDecimals[Currency.MUR],
    symbol: CurrencySymbol[Currency.MUR],
  },
  MVR: {
    decimalPlaces: CurrencyDecimals[Currency.MVR],
    symbol: CurrencySymbol[Currency.MVR],
  },
  MWK: {
    decimalPlaces: CurrencyDecimals[Currency.MWK],
    symbol: CurrencySymbol[Currency.MWK],
  },
  MXN: {
    decimalPlaces: CurrencyDecimals[Currency.MXN],
    symbol: CurrencySymbol[Currency.MXN],
  },
  MYR: {
    decimalPlaces: CurrencyDecimals[Currency.MYR],
    symbol: CurrencySymbol[Currency.MYR],
  },
  MZN: {
    decimalPlaces: CurrencyDecimals[Currency.MZN],
    symbol: CurrencySymbol[Currency.MZN],
  },
  NAD: {
    decimalPlaces: CurrencyDecimals[Currency.NAD],
    symbol: CurrencySymbol[Currency.NAD],
  },
  NGN: {
    decimalPlaces: CurrencyDecimals[Currency.NGN],
    symbol: CurrencySymbol[Currency.NGN],
  },
  NIO: {
    decimalPlaces: CurrencyDecimals[Currency.NIO],
    symbol: CurrencySymbol[Currency.NIO],
  },
  NOK: {
    decimalPlaces: CurrencyDecimals[Currency.NOK],
    symbol: CurrencySymbol[Currency.NOK],
  },
  NPR: {
    decimalPlaces: CurrencyDecimals[Currency.NPR],
    symbol: CurrencySymbol[Currency.NPR],
  },
  NZD: {
    decimalPlaces: CurrencyDecimals[Currency.NZD],
    symbol: CurrencySymbol[Currency.NZD],
  },
  OMR: {
    decimalPlaces: CurrencyDecimals[Currency.OMR],
    symbol: CurrencySymbol[Currency.OMR],
  },
  PAB: {
    decimalPlaces: CurrencyDecimals[Currency.PAB],
    symbol: CurrencySymbol[Currency.PAB],
  },
  PEN: {
    decimalPlaces: CurrencyDecimals[Currency.PEN],
    symbol: CurrencySymbol[Currency.PEN],
  },
  PGK: {
    decimalPlaces: CurrencyDecimals[Currency.PGK],
    symbol: CurrencySymbol[Currency.PGK],
  },
  PHP: {
    decimalPlaces: CurrencyDecimals[Currency.PHP],
    symbol: CurrencySymbol[Currency.PHP],
  },
  PKR: {
    decimalPlaces: CurrencyDecimals[Currency.PKR],
    symbol: CurrencySymbol[Currency.PKR],
  },
  PLN: {
    decimalPlaces: CurrencyDecimals[Currency.PLN],
    symbol: CurrencySymbol[Currency.PLN],
  },
  PYG: {
    decimalPlaces: CurrencyDecimals[Currency.PYG],
    symbol: CurrencySymbol[Currency.PYG],
  },
  QAR: {
    decimalPlaces: CurrencyDecimals[Currency.QAR],
    symbol: CurrencySymbol[Currency.QAR],
  },
  RON: {
    decimalPlaces: CurrencyDecimals[Currency.RON],
    symbol: CurrencySymbol[Currency.RON],
  },
  RSD: {
    decimalPlaces: CurrencyDecimals[Currency.RSD],
    symbol: CurrencySymbol[Currency.RSD],
  },
  RUB: {
    decimalPlaces: CurrencyDecimals[Currency.RUB],
    symbol: CurrencySymbol[Currency.RUB],
  },
  RWF: {
    decimalPlaces: CurrencyDecimals[Currency.RWF],
    symbol: CurrencySymbol[Currency.RWF],
  },
  SAR: {
    decimalPlaces: CurrencyDecimals[Currency.SAR],
    symbol: CurrencySymbol[Currency.SAR],
  },
  SBD: {
    decimalPlaces: CurrencyDecimals[Currency.SBD],
    symbol: CurrencySymbol[Currency.SBD],
  },
  SCR: {
    decimalPlaces: CurrencyDecimals[Currency.SCR],
    symbol: CurrencySymbol[Currency.SCR],
  },
  SDG: {
    decimalPlaces: CurrencyDecimals[Currency.SDG],
    symbol: CurrencySymbol[Currency.SDG],
  },
  SEK: {
    decimalPlaces: CurrencyDecimals[Currency.SEK],
    symbol: CurrencySymbol[Currency.SEK],
  },
  SGD: {
    decimalPlaces: CurrencyDecimals[Currency.SGD],
    symbol: CurrencySymbol[Currency.SGD],
  },
  SHP: {
    decimalPlaces: CurrencyDecimals[Currency.SHP],
    symbol: CurrencySymbol[Currency.SHP],
  },
  SLL: {
    decimalPlaces: CurrencyDecimals[Currency.SLL],
    symbol: CurrencySymbol[Currency.SLL],
  },
  SOS: {
    decimalPlaces: CurrencyDecimals[Currency.SOS],
    symbol: CurrencySymbol[Currency.SOS],
  },
  SRD: {
    decimalPlaces: CurrencyDecimals[Currency.SRD],
    symbol: CurrencySymbol[Currency.SRD],
  },
  SSP: {
    decimalPlaces: CurrencyDecimals[Currency.SSP],
    symbol: CurrencySymbol[Currency.SSP],
  },
  STN: {
    decimalPlaces: CurrencyDecimals[Currency.STN],
    symbol: CurrencySymbol[Currency.STN],
  },
  SVC: {
    decimalPlaces: CurrencyDecimals[Currency.SVC],
    symbol: CurrencySymbol[Currency.SVC],
  },
  SYP: {
    decimalPlaces: CurrencyDecimals[Currency.SYP],
    symbol: CurrencySymbol[Currency.SYP],
  },
  SZL: {
    decimalPlaces: CurrencyDecimals[Currency.SZL],
    symbol: CurrencySymbol[Currency.SZL],
  },
  THB: {
    decimalPlaces: CurrencyDecimals[Currency.THB],
    symbol: CurrencySymbol[Currency.THB],
  },
  TJS: {
    decimalPlaces: CurrencyDecimals[Currency.TJS],
    symbol: CurrencySymbol[Currency.TJS],
  },
  TMT: {
    decimalPlaces: CurrencyDecimals[Currency.TMT],
    symbol: CurrencySymbol[Currency.TMT],
  },
  TND: {
    decimalPlaces: CurrencyDecimals[Currency.TND],
    symbol: CurrencySymbol[Currency.TND],
  },
  TOP: {
    decimalPlaces: CurrencyDecimals[Currency.TOP],
    symbol: CurrencySymbol[Currency.TOP],
  },
  TRY: {
    decimalPlaces: CurrencyDecimals[Currency.TRY],
    symbol: CurrencySymbol[Currency.TRY],
  },
  TTD: {
    decimalPlaces: CurrencyDecimals[Currency.TTD],
    symbol: CurrencySymbol[Currency.TTD],
  },
  TWD: {
    decimalPlaces: CurrencyDecimals[Currency.TWD],
    symbol: CurrencySymbol[Currency.TWD],
  },
  TZS: {
    decimalPlaces: CurrencyDecimals[Currency.TZS],
    symbol: CurrencySymbol[Currency.TZS],
  },
  UAH: {
    decimalPlaces: CurrencyDecimals[Currency.UAH],
    symbol: CurrencySymbol[Currency.UAH],
  },
  UGX: {
    decimalPlaces: CurrencyDecimals[Currency.UGX],
    symbol: CurrencySymbol[Currency.UGX],
  },
  USD: {
    decimalPlaces: CurrencyDecimals[Currency.USD],
    symbol: CurrencySymbol[Currency.USD],
  },
  UYU: {
    decimalPlaces: CurrencyDecimals[Currency.UYU],
    symbol: CurrencySymbol[Currency.UYU],
  },
  UZS: {
    decimalPlaces: CurrencyDecimals[Currency.UZS],
    symbol: CurrencySymbol[Currency.UZS],
  },
  VES: {
    decimalPlaces: CurrencyDecimals[Currency.VES],
    symbol: CurrencySymbol[Currency.VES],
  },
  VND: {
    decimalPlaces: CurrencyDecimals[Currency.VND],
    symbol: CurrencySymbol[Currency.VND],
  },
  VUV: {
    decimalPlaces: CurrencyDecimals[Currency.VUV],
    symbol: CurrencySymbol[Currency.VUV],
  },
  WST: {
    decimalPlaces: CurrencyDecimals[Currency.WST],
    symbol: CurrencySymbol[Currency.WST],
  },
  XAF: {
    decimalPlaces: CurrencyDecimals[Currency.XAF],
    symbol: CurrencySymbol[Currency.XAF],
  },
  XCD: {
    decimalPlaces: CurrencyDecimals[Currency.XCD],
    symbol: CurrencySymbol[Currency.XCD],
  },
  XOF: {
    decimalPlaces: CurrencyDecimals[Currency.XOF],
    symbol: CurrencySymbol[Currency.XOF],
  },
  XPF: {
    decimalPlaces: CurrencyDecimals[Currency.XPF],
    symbol: CurrencySymbol[Currency.XPF],
  },
  YER: {
    decimalPlaces: CurrencyDecimals[Currency.YER],
    symbol: CurrencySymbol[Currency.YER],
  },
  ZAR: {
    decimalPlaces: CurrencyDecimals[Currency.ZAR],
    symbol: CurrencySymbol[Currency.ZAR],
  },
  ZMW: {
    decimalPlaces: CurrencyDecimals[Currency.ZMW],
    symbol: CurrencySymbol[Currency.ZMW],
  },
  ZWL: {
    decimalPlaces: CurrencyDecimals[Currency.ZWL],
    symbol: CurrencySymbol[Currency.ZWL],
  },
};

export default currencyDataMap;
