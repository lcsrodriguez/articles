/*! For license information please see _staticFinProtobuf.b489a1e1df53bbfff9f8.mjs.LICENSE.txt */
!(function (e)
{
  "use strict";
  var t,
    n,
    r,
    o = e.Reader,
    i = e.util,
    a = e.roots.default || (e.roots.default = {});
  a.quotefeeder =
    (((r = {}).QuoteType =
      ((t = {}),
        ((n = Object.create(t))[(t[0] = "NONE")] = 0),
        (n[(t[5] = "ALTSYMBOL")] = 5),
        (n[(t[7] = "HEARTBEAT")] = 7),
        (n[(t[8] = "EQUITY")] = 8),
        (n[(t[9] = "INDEX")] = 9),
        (n[(t[11] = "MUTUALFUND")] = 11),
        (n[(t[12] = "MONEYMARKET")] = 12),
        (n[(t[13] = "OPTION")] = 13),
        (n[(t[14] = "CURRENCY")] = 14),
        (n[(t[15] = "WARRANT")] = 15),
        (n[(t[17] = "BOND")] = 17),
        (n[(t[18] = "FUTURE")] = 18),
        (n[(t[20] = "ETF")] = 20),
        (n[(t[23] = "COMMODITY")] = 23),
        (n[(t[28] = "ECNQUOTE")] = 28),
        (n[(t[41] = "CRYPTOCURRENCY")] = 41),
        (n[(t[42] = "INDICATOR")] = 42),
        (n[(t[1e3] = "INDUSTRY")] = 1e3),
        n)),
      (r.MarketHours = (function ()
      {
        var e = {},
          t = Object.create(e);
        return (
          (t[(e[0] = "PRE_MARKET")] = 0),
          (t[(e[1] = "REGULAR_MARKET")] = 1),
          (t[(e[2] = "POST_MARKET")] = 2),
          (t[(e[3] = "EXTENDED_HOURS_MARKET")] = 3),
          t
        );
      })()),
      (r.OptionType = (function ()
      {
        var e = {},
          t = Object.create(e);
        return (t[(e[0] = "CALL")] = 0), (t[(e[1] = "PUT")] = 1), t;
      })()),
      (r.PricingData = (function ()
      {
        function t(e)
        {
          if (((this.indices = []), e))
            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (t.prototype.id = ""),
          (t.prototype.price = 0),
          (t.prototype.time = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.currency = ""),
          (t.prototype.exchange = ""),
          (t.prototype.quoteType = 0),
          (t.prototype.marketHours = 0),
          (t.prototype.changePercent = 0),
          (t.prototype.dayVolume = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.dayHigh = 0),
          (t.prototype.dayLow = 0),
          (t.prototype.change = 0),
          (t.prototype.shortName = ""),
          (t.prototype.expireDate = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.openPrice = 0),
          (t.prototype.previousClose = 0),
          (t.prototype.strikePrice = 0),
          (t.prototype.underlyingSymbol = ""),
          (t.prototype.openInterest = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.optionsType = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.miniOption = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.lastSize = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.bid = 0),
          (t.prototype.bidSize = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.ask = 0),
          (t.prototype.askSize = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.priceHint = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.vol_24hr = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.volAllCurrencies = i.Long ? i.Long.fromBits(0, 0, !1) : 0),
          (t.prototype.fromcurrency = ""),
          (t.prototype.lastMarket = ""),
          (t.prototype.circulatingSupply = 0),
          (t.prototype.marketcap = 0),
          (t.prototype.components = ""),
          (t.prototype.indices = i.emptyArray),
          (t.decode = function (e, t)
          {
            e instanceof o || (e = o.create(e));
            for (
              var n = void 0 === t ? e.len : e.pos + t,
              r = new a.quotefeeder.PricingData();
              e.pos < n;

            )
            {
              var i = e.uint32();
              switch (i >>> 3)
              {
                case 1:
                  r.id = e.string();
                  break;
                case 2:
                  r.price = e.float();
                  break;
                case 3:
                  r.time = e.sint64();
                  break;
                case 4:
                  r.currency = e.string();
                  break;
                case 5:
                  r.exchange = e.string();
                  break;
                case 6:
                  r.quoteType = e.int32();
                  break;
                case 7:
                  r.marketHours = e.int32();
                  break;
                case 8:
                  r.changePercent = e.float();
                  break;
                case 9:
                  r.dayVolume = e.sint64();
                  break;
                case 10:
                  r.dayHigh = e.float();
                  break;
                case 11:
                  r.dayLow = e.float();
                  break;
                case 12:
                  r.change = e.float();
                  break;
                case 13:
                  r.shortName = e.string();
                  break;
                case 14:
                  r.expireDate = e.sint64();
                  break;
                case 15:
                  r.openPrice = e.float();
                  break;
                case 16:
                  r.previousClose = e.float();
                  break;
                case 17:
                  r.strikePrice = e.float();
                  break;
                case 18:
                  r.underlyingSymbol = e.string();
                  break;
                case 19:
                  r.openInterest = e.sint64();
                  break;
                case 20:
                  r.optionsType = e.sint64();
                  break;
                case 21:
                  r.miniOption = e.sint64();
                  break;
                case 22:
                  r.lastSize = e.sint64();
                  break;
                case 23:
                  r.bid = e.float();
                  break;
                case 24:
                  r.bidSize = e.sint64();
                  break;
                case 25:
                  r.ask = e.float();
                  break;
                case 26:
                  r.askSize = e.sint64();
                  break;
                case 27:
                  r.priceHint = e.sint64();
                  break;
                case 28:
                  r.vol_24hr = e.sint64();
                  break;
                case 29:
                  r.volAllCurrencies = e.sint64();
                  break;
                case 30:
                  r.fromcurrency = e.string();
                  break;
                case 31:
                  r.lastMarket = e.string();
                  break;
                case 32:
                  r.circulatingSupply = e.double();
                  break;
                case 33:
                  r.marketcap = e.double();
                  break;
                case 34:
                  r.components = e.string();
                  break;
                case 35:
                  (r.indices && r.indices.length) || (r.indices = []),
                    r.indices.push(e.string());
                  break;
                default:
                  e.skipType(7 & i);
              }
            }
            return r;
          }),
          (t.fromObject = function (e)
          {
            if (e instanceof a.quotefeeder.PricingData) return e;
            var t = new a.quotefeeder.PricingData();
            switch (
            (null != e.id && (t.id = String(e.id)),
              null != e.price && (t.price = Number(e.price)),
              null != e.time &&
              (i.Long
                ? ((t.time = i.Long.fromValue(e.time)).unsigned = !1)
                : "string" == typeof e.time
                  ? (t.time = parseInt(e.time, 10))
                  : "number" == typeof e.time
                    ? (t.time = e.time)
                    : "object" == typeof e.time &&
                    (t.time = new i.LongBits(
                      e.time.low >>> 0,
                      e.time.high >>> 0
                    ).toNumber())),
              null != e.currency && (t.currency = String(e.currency)),
              null != e.exchange && (t.exchange = String(e.exchange)),
              e.quoteType)
            )
            {
              default:
                if ("number" == typeof e.quoteType)
                {
                  t.quoteType = e.quoteType;
                  break;
                }
                break;
              case "NONE":
              case 0:
                t.quoteType = 0;
                break;
              case "ALTSYMBOL":
              case 5:
                t.quoteType = 5;
                break;
              case "HEARTBEAT":
              case 7:
                t.quoteType = 7;
                break;
              case "EQUITY":
              case 8:
                t.quoteType = 8;
                break;
              case "INDEX":
              case 9:
                t.quoteType = 9;
                break;
              case "MUTUALFUND":
              case 11:
                t.quoteType = 11;
                break;
              case "MONEYMARKET":
              case 12:
                t.quoteType = 12;
                break;
              case "OPTION":
              case 13:
                t.quoteType = 13;
                break;
              case "CURRENCY":
              case 14:
                t.quoteType = 14;
                break;
              case "WARRANT":
              case 15:
                t.quoteType = 15;
                break;
              case "BOND":
              case 17:
                t.quoteType = 17;
                break;
              case "FUTURE":
              case 18:
                t.quoteType = 18;
                break;
              case "ETF":
              case 20:
                t.quoteType = 20;
                break;
              case "COMMODITY":
              case 23:
                t.quoteType = 23;
                break;
              case "ECNQUOTE":
              case 28:
                t.quoteType = 28;
                break;
              case "CRYPTOCURRENCY":
              case 41:
                t.quoteType = 41;
                break;
              case "INDICATOR":
              case 42:
                t.quoteType = 42;
                break;
              case "INDUSTRY":
              case 1e3:
                t.quoteType = 1e3;
            }
            switch (e.marketHours)
            {
              default:
                if ("number" == typeof e.marketHours)
                {
                  t.marketHours = e.marketHours;
                  break;
                }
                break;
              case "PRE_MARKET":
              case 0:
                t.marketHours = 0;
                break;
              case "REGULAR_MARKET":
              case 1:
                t.marketHours = 1;
                break;
              case "POST_MARKET":
              case 2:
                t.marketHours = 2;
                break;
              case "EXTENDED_HOURS_MARKET":
              case 3:
                t.marketHours = 3;
            }
            if (
              (null != e.changePercent &&
                (t.changePercent = Number(e.changePercent)),
                null != e.dayVolume &&
                (i.Long
                  ? ((t.dayVolume = i.Long.fromValue(e.dayVolume)).unsigned = !1)
                  : "string" == typeof e.dayVolume
                    ? (t.dayVolume = parseInt(e.dayVolume, 10))
                    : "number" == typeof e.dayVolume
                      ? (t.dayVolume = e.dayVolume)
                      : "object" == typeof e.dayVolume &&
                      (t.dayVolume = new i.LongBits(
                        e.dayVolume.low >>> 0,
                        e.dayVolume.high >>> 0
                      ).toNumber())),
                null != e.dayHigh && (t.dayHigh = Number(e.dayHigh)),
                null != e.dayLow && (t.dayLow = Number(e.dayLow)),
                null != e.change && (t.change = Number(e.change)),
                null != e.shortName && (t.shortName = String(e.shortName)),
                null != e.expireDate &&
                (i.Long
                  ? ((t.expireDate = i.Long.fromValue(e.expireDate)).unsigned =
                    !1)
                  : "string" == typeof e.expireDate
                    ? (t.expireDate = parseInt(e.expireDate, 10))
                    : "number" == typeof e.expireDate
                      ? (t.expireDate = e.expireDate)
                      : "object" == typeof e.expireDate &&
                      (t.expireDate = new i.LongBits(
                        e.expireDate.low >>> 0,
                        e.expireDate.high >>> 0
                      ).toNumber())),
                null != e.openPrice && (t.openPrice = Number(e.openPrice)),
                null != e.previousClose &&
                (t.previousClose = Number(e.previousClose)),
                null != e.strikePrice && (t.strikePrice = Number(e.strikePrice)),
                null != e.underlyingSymbol &&
                (t.underlyingSymbol = String(e.underlyingSymbol)),
                null != e.openInterest &&
                (i.Long
                  ? ((t.openInterest = i.Long.fromValue(
                    e.openInterest
                  )).unsigned = !1)
                  : "string" == typeof e.openInterest
                    ? (t.openInterest = parseInt(e.openInterest, 10))
                    : "number" == typeof e.openInterest
                      ? (t.openInterest = e.openInterest)
                      : "object" == typeof e.openInterest &&
                      (t.openInterest = new i.LongBits(
                        e.openInterest.low >>> 0,
                        e.openInterest.high >>> 0
                      ).toNumber())),
                null != e.optionsType &&
                (i.Long
                  ? ((t.optionsType = i.Long.fromValue(e.optionsType)).unsigned =
                    !1)
                  : "string" == typeof e.optionsType
                    ? (t.optionsType = parseInt(e.optionsType, 10))
                    : "number" == typeof e.optionsType
                      ? (t.optionsType = e.optionsType)
                      : "object" == typeof e.optionsType &&
                      (t.optionsType = new i.LongBits(
                        e.optionsType.low >>> 0,
                        e.optionsType.high >>> 0
                      ).toNumber())),
                null != e.miniOption &&
                (i.Long
                  ? ((t.miniOption = i.Long.fromValue(e.miniOption)).unsigned =
                    !1)
                  : "string" == typeof e.miniOption
                    ? (t.miniOption = parseInt(e.miniOption, 10))
                    : "number" == typeof e.miniOption
                      ? (t.miniOption = e.miniOption)
                      : "object" == typeof e.miniOption &&
                      (t.miniOption = new i.LongBits(
                        e.miniOption.low >>> 0,
                        e.miniOption.high >>> 0
                      ).toNumber())),
                null != e.lastSize &&
                (i.Long
                  ? ((t.lastSize = i.Long.fromValue(e.lastSize)).unsigned = !1)
                  : "string" == typeof e.lastSize
                    ? (t.lastSize = parseInt(e.lastSize, 10))
                    : "number" == typeof e.lastSize
                      ? (t.lastSize = e.lastSize)
                      : "object" == typeof e.lastSize &&
                      (t.lastSize = new i.LongBits(
                        e.lastSize.low >>> 0,
                        e.lastSize.high >>> 0
                      ).toNumber())),
                null != e.bid && (t.bid = Number(e.bid)),
                null != e.bidSize &&
                (i.Long
                  ? ((t.bidSize = i.Long.fromValue(e.bidSize)).unsigned = !1)
                  : "string" == typeof e.bidSize
                    ? (t.bidSize = parseInt(e.bidSize, 10))
                    : "number" == typeof e.bidSize
                      ? (t.bidSize = e.bidSize)
                      : "object" == typeof e.bidSize &&
                      (t.bidSize = new i.LongBits(
                        e.bidSize.low >>> 0,
                        e.bidSize.high >>> 0
                      ).toNumber())),
                null != e.ask && (t.ask = Number(e.ask)),
                null != e.askSize &&
                (i.Long
                  ? ((t.askSize = i.Long.fromValue(e.askSize)).unsigned = !1)
                  : "string" == typeof e.askSize
                    ? (t.askSize = parseInt(e.askSize, 10))
                    : "number" == typeof e.askSize
                      ? (t.askSize = e.askSize)
                      : "object" == typeof e.askSize &&
                      (t.askSize = new i.LongBits(
                        e.askSize.low >>> 0,
                        e.askSize.high >>> 0
                      ).toNumber())),
                null != e.priceHint &&
                (i.Long
                  ? ((t.priceHint = i.Long.fromValue(e.priceHint)).unsigned = !1)
                  : "string" == typeof e.priceHint
                    ? (t.priceHint = parseInt(e.priceHint, 10))
                    : "number" == typeof e.priceHint
                      ? (t.priceHint = e.priceHint)
                      : "object" == typeof e.priceHint &&
                      (t.priceHint = new i.LongBits(
                        e.priceHint.low >>> 0,
                        e.priceHint.high >>> 0
                      ).toNumber())),
                null != e.vol_24hr &&
                (i.Long
                  ? ((t.vol_24hr = i.Long.fromValue(e.vol_24hr)).unsigned = !1)
                  : "string" == typeof e.vol_24hr
                    ? (t.vol_24hr = parseInt(e.vol_24hr, 10))
                    : "number" == typeof e.vol_24hr
                      ? (t.vol_24hr = e.vol_24hr)
                      : "object" == typeof e.vol_24hr &&
                      (t.vol_24hr = new i.LongBits(
                        e.vol_24hr.low >>> 0,
                        e.vol_24hr.high >>> 0
                      ).toNumber())),
                null != e.volAllCurrencies &&
                (i.Long
                  ? ((t.volAllCurrencies = i.Long.fromValue(
                    e.volAllCurrencies
                  )).unsigned = !1)
                  : "string" == typeof e.volAllCurrencies
                    ? (t.volAllCurrencies = parseInt(e.volAllCurrencies, 10))
                    : "number" == typeof e.volAllCurrencies
                      ? (t.volAllCurrencies = e.volAllCurrencies)
                      : "object" == typeof e.volAllCurrencies &&
                      (t.volAllCurrencies = new i.LongBits(
                        e.volAllCurrencies.low >>> 0,
                        e.volAllCurrencies.high >>> 0
                      ).toNumber())),
                null != e.fromcurrency && (t.fromcurrency = String(e.fromcurrency)),
                null != e.lastMarket && (t.lastMarket = String(e.lastMarket)),
                null != e.circulatingSupply &&
                (t.circulatingSupply = Number(e.circulatingSupply)),
                null != e.marketcap && (t.marketcap = Number(e.marketcap)),
                null != e.components && (t.components = String(e.components)),
                e.indices)
            )
            {
              if (!Array.isArray(e.indices))
                throw TypeError(
                  ".quotefeeder.PricingData.indices: array expected"
                );
              t.indices = [];
              for (var n = 0; n < e.indices.length; ++n)
                t.indices[n] = String(e.indices[n]);
            }
            return t;
          }),
          (t.toObject = function (e, t)
          {
            t || (t = {});
            var n = {};
            if (((t.arrays || t.defaults) && (n.indices = []), t.defaults))
            {
              if (((n.id = ""), (n.price = 0), i.Long))
              {
                var r = new i.Long(0, 0, !1);
                n.time =
                  t.longs === String
                    ? r.toString()
                    : t.longs === Number
                      ? r.toNumber()
                      : r;
              } else n.time = t.longs === String ? "0" : 0;
              (n.currency = ""),
                (n.exchange = ""),
                (n.quoteType = t.enums === String ? "NONE" : 0),
                (n.marketHours = t.enums === String ? "PRE_MARKET" : 0),
                (n.changePercent = 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.dayVolume =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.dayVolume = t.longs === String ? "0" : 0),
                (n.dayHigh = 0),
                (n.dayLow = 0),
                (n.change = 0),
                (n.shortName = ""),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.expireDate =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.expireDate = t.longs === String ? "0" : 0),
                (n.openPrice = 0),
                (n.previousClose = 0),
                (n.strikePrice = 0),
                (n.underlyingSymbol = ""),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.openInterest =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.openInterest = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.optionsType =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.optionsType = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.miniOption =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.miniOption = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.lastSize =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.lastSize = t.longs === String ? "0" : 0),
                (n.bid = 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.bidSize =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.bidSize = t.longs === String ? "0" : 0),
                (n.ask = 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.askSize =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.askSize = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.priceHint =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.priceHint = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.vol_24hr =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.vol_24hr = t.longs === String ? "0" : 0),
                i.Long
                  ? ((r = new i.Long(0, 0, !1)),
                    (n.volAllCurrencies =
                      t.longs === String
                        ? r.toString()
                        : t.longs === Number
                          ? r.toNumber()
                          : r))
                  : (n.volAllCurrencies = t.longs === String ? "0" : 0),
                (n.fromcurrency = ""),
                (n.lastMarket = ""),
                (n.circulatingSupply = 0),
                (n.marketcap = 0),
                (n.components = "");
            }
            if (
              (null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
                null != e.price &&
                e.hasOwnProperty("price") &&
                (n.price =
                  t.json && !isFinite(e.price) ? String(e.price) : e.price),
                null != e.time &&
                e.hasOwnProperty("time") &&
                ("number" == typeof e.time
                  ? (n.time = t.longs === String ? String(e.time) : e.time)
                  : (n.time =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.time)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.time.low >>> 0,
                          e.time.high >>> 0
                        ).toNumber()
                        : e.time)),
                null != e.currency &&
                e.hasOwnProperty("currency") &&
                (n.currency = e.currency),
                null != e.exchange &&
                e.hasOwnProperty("exchange") &&
                (n.exchange = e.exchange),
                null != e.quoteType &&
                e.hasOwnProperty("quoteType") &&
                (n.quoteType =
                  t.enums === String
                    ? void 0 === a.quotefeeder.QuoteType[e.quoteType]
                      ? e.quoteType
                      : a.quotefeeder.QuoteType[e.quoteType]
                    : e.quoteType),
                null != e.marketHours &&
                e.hasOwnProperty("marketHours") &&
                (n.marketHours =
                  t.enums === String
                    ? void 0 === a.quotefeeder.MarketHours[e.marketHours]
                      ? e.marketHours
                      : a.quotefeeder.MarketHours[e.marketHours]
                    : e.marketHours),
                null != e.changePercent &&
                e.hasOwnProperty("changePercent") &&
                (n.changePercent =
                  t.json && !isFinite(e.changePercent)
                    ? String(e.changePercent)
                    : e.changePercent),
                null != e.dayVolume &&
                e.hasOwnProperty("dayVolume") &&
                ("number" == typeof e.dayVolume
                  ? (n.dayVolume =
                    t.longs === String ? String(e.dayVolume) : e.dayVolume)
                  : (n.dayVolume =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.dayVolume)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.dayVolume.low >>> 0,
                          e.dayVolume.high >>> 0
                        ).toNumber()
                        : e.dayVolume)),
                null != e.dayHigh &&
                e.hasOwnProperty("dayHigh") &&
                (n.dayHigh =
                  t.json && !isFinite(e.dayHigh) ? String(e.dayHigh) : e.dayHigh),
                null != e.dayLow &&
                e.hasOwnProperty("dayLow") &&
                (n.dayLow =
                  t.json && !isFinite(e.dayLow) ? String(e.dayLow) : e.dayLow),
                null != e.change &&
                e.hasOwnProperty("change") &&
                (n.change =
                  t.json && !isFinite(e.change) ? String(e.change) : e.change),
                null != e.shortName &&
                e.hasOwnProperty("shortName") &&
                (n.shortName = e.shortName),
                null != e.expireDate &&
                e.hasOwnProperty("expireDate") &&
                ("number" == typeof e.expireDate
                  ? (n.expireDate =
                    t.longs === String ? String(e.expireDate) : e.expireDate)
                  : (n.expireDate =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.expireDate)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.expireDate.low >>> 0,
                          e.expireDate.high >>> 0
                        ).toNumber()
                        : e.expireDate)),
                null != e.openPrice &&
                e.hasOwnProperty("openPrice") &&
                (n.openPrice =
                  t.json && !isFinite(e.openPrice)
                    ? String(e.openPrice)
                    : e.openPrice),
                null != e.previousClose &&
                e.hasOwnProperty("previousClose") &&
                (n.previousClose =
                  t.json && !isFinite(e.previousClose)
                    ? String(e.previousClose)
                    : e.previousClose),
                null != e.strikePrice &&
                e.hasOwnProperty("strikePrice") &&
                (n.strikePrice =
                  t.json && !isFinite(e.strikePrice)
                    ? String(e.strikePrice)
                    : e.strikePrice),
                null != e.underlyingSymbol &&
                e.hasOwnProperty("underlyingSymbol") &&
                (n.underlyingSymbol = e.underlyingSymbol),
                null != e.openInterest &&
                e.hasOwnProperty("openInterest") &&
                ("number" == typeof e.openInterest
                  ? (n.openInterest =
                    t.longs === String
                      ? String(e.openInterest)
                      : e.openInterest)
                  : (n.openInterest =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.openInterest)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.openInterest.low >>> 0,
                          e.openInterest.high >>> 0
                        ).toNumber()
                        : e.openInterest)),
                null != e.optionsType &&
                e.hasOwnProperty("optionsType") &&
                ("number" == typeof e.optionsType
                  ? (n.optionsType =
                    t.longs === String ? String(e.optionsType) : e.optionsType)
                  : (n.optionsType =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.optionsType)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.optionsType.low >>> 0,
                          e.optionsType.high >>> 0
                        ).toNumber()
                        : e.optionsType)),
                null != e.miniOption &&
                e.hasOwnProperty("miniOption") &&
                ("number" == typeof e.miniOption
                  ? (n.miniOption =
                    t.longs === String ? String(e.miniOption) : e.miniOption)
                  : (n.miniOption =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.miniOption)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.miniOption.low >>> 0,
                          e.miniOption.high >>> 0
                        ).toNumber()
                        : e.miniOption)),
                null != e.lastSize &&
                e.hasOwnProperty("lastSize") &&
                ("number" == typeof e.lastSize
                  ? (n.lastSize =
                    t.longs === String ? String(e.lastSize) : e.lastSize)
                  : (n.lastSize =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.lastSize)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.lastSize.low >>> 0,
                          e.lastSize.high >>> 0
                        ).toNumber()
                        : e.lastSize)),
                null != e.bid &&
                e.hasOwnProperty("bid") &&
                (n.bid = t.json && !isFinite(e.bid) ? String(e.bid) : e.bid),
                null != e.bidSize &&
                e.hasOwnProperty("bidSize") &&
                ("number" == typeof e.bidSize
                  ? (n.bidSize =
                    t.longs === String ? String(e.bidSize) : e.bidSize)
                  : (n.bidSize =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.bidSize)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.bidSize.low >>> 0,
                          e.bidSize.high >>> 0
                        ).toNumber()
                        : e.bidSize)),
                null != e.ask &&
                e.hasOwnProperty("ask") &&
                (n.ask = t.json && !isFinite(e.ask) ? String(e.ask) : e.ask),
                null != e.askSize &&
                e.hasOwnProperty("askSize") &&
                ("number" == typeof e.askSize
                  ? (n.askSize =
                    t.longs === String ? String(e.askSize) : e.askSize)
                  : (n.askSize =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.askSize)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.askSize.low >>> 0,
                          e.askSize.high >>> 0
                        ).toNumber()
                        : e.askSize)),
                null != e.priceHint &&
                e.hasOwnProperty("priceHint") &&
                ("number" == typeof e.priceHint
                  ? (n.priceHint =
                    t.longs === String ? String(e.priceHint) : e.priceHint)
                  : (n.priceHint =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.priceHint)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.priceHint.low >>> 0,
                          e.priceHint.high >>> 0
                        ).toNumber()
                        : e.priceHint)),
                null != e.vol_24hr &&
                e.hasOwnProperty("vol_24hr") &&
                ("number" == typeof e.vol_24hr
                  ? (n.vol_24hr =
                    t.longs === String ? String(e.vol_24hr) : e.vol_24hr)
                  : (n.vol_24hr =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.vol_24hr)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.vol_24hr.low >>> 0,
                          e.vol_24hr.high >>> 0
                        ).toNumber()
                        : e.vol_24hr)),
                null != e.volAllCurrencies &&
                e.hasOwnProperty("volAllCurrencies") &&
                ("number" == typeof e.volAllCurrencies
                  ? (n.volAllCurrencies =
                    t.longs === String
                      ? String(e.volAllCurrencies)
                      : e.volAllCurrencies)
                  : (n.volAllCurrencies =
                    t.longs === String
                      ? i.Long.prototype.toString.call(e.volAllCurrencies)
                      : t.longs === Number
                        ? new i.LongBits(
                          e.volAllCurrencies.low >>> 0,
                          e.volAllCurrencies.high >>> 0
                        ).toNumber()
                        : e.volAllCurrencies)),
                null != e.fromcurrency &&
                e.hasOwnProperty("fromcurrency") &&
                (n.fromcurrency = e.fromcurrency),
                null != e.lastMarket &&
                e.hasOwnProperty("lastMarket") &&
                (n.lastMarket = e.lastMarket),
                null != e.circulatingSupply &&
                e.hasOwnProperty("circulatingSupply") &&
                (n.circulatingSupply =
                  t.json && !isFinite(e.circulatingSupply)
                    ? String(e.circulatingSupply)
                    : e.circulatingSupply),
                null != e.marketcap &&
                e.hasOwnProperty("marketcap") &&
                (n.marketcap =
                  t.json && !isFinite(e.marketcap)
                    ? String(e.marketcap)
                    : e.marketcap),
                null != e.components &&
                e.hasOwnProperty("components") &&
                (n.components = e.components),
                e.indices && e.indices.length)
            )
            {
              n.indices = [];
              for (var o = 0; o < e.indices.length; ++o)
                n.indices[o] = e.indices[o];
            }
            return n;
          }),
          (t.prototype.toJSON = function ()
          {
            return this.constructor.toObject(this, e.util.toJSONOptions);
          }),
          (t.getTypeUrl = function (e)
          {
            return (
              void 0 === e && (e = "type.googleapis.com"),
              e + "/quotefeeder.PricingData"
            );
          }),
          t
        );
      })()),
      (r.StaticData = (function ()
      {
        function t(e)
        {
          if (e)
            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (t.prototype.id = ""),
          (t.prototype.displayName = ""),
          (t.prototype.currency = ""),
          (t.prototype.exchange = ""),
          (t.prototype.openPrice = 0),
          (t.prototype.closePrice = 0),
          (t.prototype.fiftytwoWkMovingAvgPrice = 0),
          (t.prototype.twohundredDataMovingAvgPrice = 0),
          (t.decode = function (e, t)
          {
            e instanceof o || (e = o.create(e));
            for (
              var n = void 0 === t ? e.len : e.pos + t,
              r = new a.quotefeeder.StaticData();
              e.pos < n;

            )
            {
              var i = e.uint32();
              switch (i >>> 3)
              {
                case 1:
                  r.id = e.string();
                  break;
                case 2:
                  r.displayName = e.string();
                  break;
                case 3:
                  r.currency = e.string();
                  break;
                case 4:
                  r.exchange = e.string();
                  break;
                case 5:
                  r.openPrice = e.float();
                  break;
                case 6:
                  r.closePrice = e.float();
                  break;
                case 7:
                  r.fiftytwoWkMovingAvgPrice = e.float();
                  break;
                case 8:
                  r.twohundredDataMovingAvgPrice = e.float();
                  break;
                default:
                  e.skipType(7 & i);
              }
            }
            return r;
          }),
          (t.fromObject = function (e)
          {
            if (e instanceof a.quotefeeder.StaticData) return e;
            var t = new a.quotefeeder.StaticData();
            return (
              null != e.id && (t.id = String(e.id)),
              null != e.displayName && (t.displayName = String(e.displayName)),
              null != e.currency && (t.currency = String(e.currency)),
              null != e.exchange && (t.exchange = String(e.exchange)),
              null != e.openPrice && (t.openPrice = Number(e.openPrice)),
              null != e.closePrice && (t.closePrice = Number(e.closePrice)),
              null != e.fiftytwoWkMovingAvgPrice &&
              (t.fiftytwoWkMovingAvgPrice = Number(e.fiftytwoWkMovingAvgPrice)),
              null != e.twohundredDataMovingAvgPrice &&
              (t.twohundredDataMovingAvgPrice = Number(
                e.twohundredDataMovingAvgPrice
              )),
              t
            );
          }),
          (t.toObject = function (e, t)
          {
            t || (t = {});
            var n = {};
            return (
              t.defaults &&
              ((n.id = ""),
                (n.displayName = ""),
                (n.currency = ""),
                (n.exchange = ""),
                (n.openPrice = 0),
                (n.closePrice = 0),
                (n.fiftytwoWkMovingAvgPrice = 0),
                (n.twohundredDataMovingAvgPrice = 0)),
              null != e.id && e.hasOwnProperty("id") && (n.id = e.id),
              null != e.displayName &&
              e.hasOwnProperty("displayName") &&
              (n.displayName = e.displayName),
              null != e.currency &&
              e.hasOwnProperty("currency") &&
              (n.currency = e.currency),
              null != e.exchange &&
              e.hasOwnProperty("exchange") &&
              (n.exchange = e.exchange),
              null != e.openPrice &&
              e.hasOwnProperty("openPrice") &&
              (n.openPrice =
                t.json && !isFinite(e.openPrice)
                  ? String(e.openPrice)
                  : e.openPrice),
              null != e.closePrice &&
              e.hasOwnProperty("closePrice") &&
              (n.closePrice =
                t.json && !isFinite(e.closePrice)
                  ? String(e.closePrice)
                  : e.closePrice),
              null != e.fiftytwoWkMovingAvgPrice &&
              e.hasOwnProperty("fiftytwoWkMovingAvgPrice") &&
              (n.fiftytwoWkMovingAvgPrice =
                t.json && !isFinite(e.fiftytwoWkMovingAvgPrice)
                  ? String(e.fiftytwoWkMovingAvgPrice)
                  : e.fiftytwoWkMovingAvgPrice),
              null != e.twohundredDataMovingAvgPrice &&
              e.hasOwnProperty("twohundredDataMovingAvgPrice") &&
              (n.twohundredDataMovingAvgPrice =
                t.json && !isFinite(e.twohundredDataMovingAvgPrice)
                  ? String(e.twohundredDataMovingAvgPrice)
                  : e.twohundredDataMovingAvgPrice),
              n
            );
          }),
          (t.prototype.toJSON = function ()
          {
            return this.constructor.toObject(this, e.util.toJSONOptions);
          }),
          (t.getTypeUrl = function (e)
          {
            return (
              void 0 === e && (e = "type.googleapis.com"),
              e + "/quotefeeder.StaticData"
            );
          }),
          t
        );
      })()),
      (r.PriceUpdate = (function ()
      {
        function t(e)
        {
          if (e)
            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (t.prototype.pricingData = null),
          (t.decode = function (e, t)
          {
            e instanceof o || (e = o.create(e));
            for (
              var n = void 0 === t ? e.len : e.pos + t,
              r = new a.quotefeeder.PriceUpdate();
              e.pos < n;

            )
            {
              var i = e.uint32();
              i >>> 3 == 1
                ? (r.pricingData = a.quotefeeder.PricingData.decode(
                  e,
                  e.uint32()
                ))
                : e.skipType(7 & i);
            }
            return r;
          }),
          (t.fromObject = function (e)
          {
            if (e instanceof a.quotefeeder.PriceUpdate) return e;
            var t = new a.quotefeeder.PriceUpdate();
            if (null != e.pricingData)
            {
              if ("object" != typeof e.pricingData)
                throw TypeError(
                  ".quotefeeder.PriceUpdate.pricingData: object expected"
                );
              t.pricingData = a.quotefeeder.PricingData.fromObject(e.pricingData);
            }
            return t;
          }),
          (t.toObject = function (e, t)
          {
            t || (t = {});
            var n = {};
            return (
              t.defaults && (n.pricingData = null),
              null != e.pricingData &&
              e.hasOwnProperty("pricingData") &&
              (n.pricingData = a.quotefeeder.PricingData.toObject(
                e.pricingData,
                t
              )),
              n
            );
          }),
          (t.prototype.toJSON = function ()
          {
            return this.constructor.toObject(this, e.util.toJSONOptions);
          }),
          (t.getTypeUrl = function (e)
          {
            return (
              void 0 === e && (e = "type.googleapis.com"),
              e + "/quotefeeder.PriceUpdate"
            );
          }),
          t
        );
      })()),
      (r.StaticUpdate = (function ()
      {
        function t(e)
        {
          if (e)
            for (var t = Object.keys(e), n = 0; n < t.length; ++n)
              null != e[t[n]] && (this[t[n]] = e[t[n]]);
        }
        return (
          (t.prototype.staticData = null),
          (t.decode = function (e, t)
          {
            e instanceof o || (e = o.create(e));
            for (
              var n = void 0 === t ? e.len : e.pos + t,
              r = new a.quotefeeder.StaticUpdate();
              e.pos < n;

            )
            {
              var i = e.uint32();
              i >>> 3 == 1
                ? (r.staticData = a.quotefeeder.StaticData.decode(e, e.uint32()))
                : e.skipType(7 & i);
            }
            return r;
          }),
          (t.fromObject = function (e)
          {
            if (e instanceof a.quotefeeder.StaticUpdate) return e;
            var t = new a.quotefeeder.StaticUpdate();
            if (null != e.staticData)
            {
              if ("object" != typeof e.staticData)
                throw TypeError(
                  ".quotefeeder.StaticUpdate.staticData: object expected"
                );
              t.staticData = a.quotefeeder.StaticData.fromObject(e.staticData);
            }
            return t;
          }),
          (t.toObject = function (e, t)
          {
            t || (t = {});
            var n = {};
            return (
              t.defaults && (n.staticData = null),
              null != e.staticData &&
              e.hasOwnProperty("staticData") &&
              (n.staticData = a.quotefeeder.StaticData.toObject(
                e.staticData,
                t
              )),
              n
            );
          }),
          (t.prototype.toJSON = function ()
          {
            return this.constructor.toObject(this, e.util.toJSONOptions);
          }),
          (t.getTypeUrl = function (e)
          {
            return (
              void 0 === e && (e = "type.googleapis.com"),
              e + "/quotefeeder.StaticUpdate"
            );
          }),
          t
        );
      })()),
      r);
})(protobuf);
