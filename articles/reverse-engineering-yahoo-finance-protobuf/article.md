# Reverse engineering of the Yahoo! Finance (WS feature) through ProtoBuf.


## Context


## Current architecture



<img src="https://raw.githubusercontent.com/lcsrodriguez/articles/main/articles/reverse-engineering-yahoo-finance-protobuf/img/http-request.png">

**Links**:
- Protocol Buffer JS script: [https://s.yimg.com/uc/finance/webcore/js/_staticFinProtobuf.b489a1e1df53bbfff9f8.mjs](https://s.yimg.com/uc/finance/webcore/js/_staticFinProtobuf.b489a1e1df53bbfff9f8.mjs)

- License: [Finance WebCore 1.0.312 Copyright 2023 Yahoo Inc.](https://s.yimg.com/uc/finance/webcore/js/_staticFinProtobuf.b489a1e1df53bbfff9f8.mjs.LICENSE.txt)

## Protobuf reverse engineering


1. Download the JavaScript source script from a random HTTP request on `*.finance.yahoo.com`:
```bash
mkdir assets; cd assets/
curl -s https://s.yimg.com/uc/finance/webcore/js/_staticFinProtobuf.b489a1e1df53bbfff9f8.mjs > proto.js
```
2. Pretty-print the JS file:
```bash
npx prettier proto.js >> proto_final.js
```

3. Display the resulting and *pretty-print* JS file:
```bash
vim proto_final.js
```

4. Build and compile the `.proto` file:


5. Display the final architecture:
```bash
tree -L 2
```

**Remarks**: The first element of each `enum` has to be a zero-value.
- There must be a zero value, so that we can use 0 as a numeric default value.
- The zero value needs to be the first element, for compatibility with the `proto2`
    semantics where the first enum value is always the default.

Reference: https://developers.google.com/protocol-buffers/docs/proto3?hl=en#enum

<div class="mermaid">
graph TD
    PricingData
    StaticData

    PricingData --> QuoteType
    PricingData --> MarketHours
    PricingData --> OptionType
    PricingData --> GD[General attributes] 
    StaticData --> GD2[General attributes] 
</div>

## `.proto` file

```protobuf
// Retro-engineered         : As of May 2023
// Original development by  : Yahoo

syntax = "proto3";


// Pricing data
message PricingData {

  // Quote type
  enum QuoteType {
    NONE = 0;
    ALTSYMBOL = 5;
    HEARTBEAT = 7;
    EQUITY = 8;
    INDEX = 9;
    MUTUALFUND = 11;
    MONEYMARKET = 12;
    OPTION = 13;
    CURRENCY = 14;
    WARRANT = 15;
    BOND = 17;
    FUTURE = 18;
    ETF = 20;
    COMMODITY = 23;
    ECNQUOTE = 28;
    CRYPTOCURRENCY = 41;
    INDICATOR = 42;
    INDUSTRY = 1000;
  };

  // Markets hours
  enum MarketHours {
    PRE_MARKET = 0;
    REGULAR_MARKET = 1;
    POST_MARKET = 2;
    EXTENDED_HOURS_MARKET = 3;
  };

  // Option type
  enum OptionType {
    CALL = 0;
    PUT = 1;
  };

  // General attributes
  string id = 1;
  float price = 2;
  sint64 time = 3;
  string currency = 4;
  string exchange = 5;
  QuoteType quoteType = 6;
  MarketHours marketHours = 7;
  float changePercent = 8;
  sint64 dayVolume = 9;
  float dayHigh = 10;
  float dayLow = 11;
  float change = 12;
  string shortName = 13;
  sint64 expireDate = 14;
  float openPrice = 15;
  float previousClose = 16;
  float strikePrice = 17;
  string underlyingSymbol = 18;
  sint64 openInterest = 19;
  OptionType optionsType = 20;
  sint64 miniOption = 21;
  sint64 lastSize = 22;
  float bid = 23;
  sint64 bidSize = 24;
  float ask = 25;
  sint64 askSize= 26;
  sint64 priceHint = 27;
  sint64 vol_24hr = 28;
  sint64 volAllCurrencies = 29;
  string fromcurrency = 30;
  string lastMarket = 31;
  double circulatingSupply = 32;
  double marketcap = 33;
  string components = 34;
};

// Static data
message StaticData {
  string id = 1;
  string displayName = 2;
  string currency = 3;
  string exchange = 4;
  float openPrice = 5;
  float closePrice = 6;
  float fiftytwoWkMovingAvgPrice = 7;
  float twohundredDataMovingAvgPrice = 8;
}
```