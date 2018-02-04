# bancor-api-node

NodeJS client for the Bancor API.

## Table of Contents

-   [Installation](#Installation)
-   [ticker](#ticker)
-   [rate](#rate)
-   [tokens](#tokens)
-   [relays](#relays)
-   [currencies](#currencies)
-   [Future Work](#FutureWork)

## Installation

`npm install bancor-api-node`

## API

### tickerBySymbol

This function returns a ticker showing price (low, high, current), supply, and volume of specified currency.

**Parameters**

-   `currencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input desired currency.
-   `fromCurrencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The price of first currency is displayed in this currency.
-   `callback` **callback** Callback function.

**Examples**

```javascript
bancor.ticker("OMG", "GNO", function(data, response) {
     console.log(data);
  })
 { name: 'OmiseGo',
   symbol: 'OMG',
   code: 'OMG',
   decimals: 18,
   price24hHigh: 0,
   price24hLow: 0,
   price: 0.05595976535725013,
   price24h: 0.044364364108873615,
   totalSupply: '140245398245132780789239631',
   volume24h: '119202620641242380323' } }
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

### ticker

This function returns a ticker showing price (low, high, current), supply, and volume of specified currency.

**Parameters**

-   `currencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input desired currency id.
-   `fromCurrencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The price of first currency is displayed in this currency.
-   `callback` **callback** Callback function.

**Examples**

```javascript
bancor.ticker("5a086f93875e890001605abc", "5a174c5145a97200011ad30a", function(data, response) {
     console.log(data);
  })
 { name: 'OmiseGo',
   symbol: 'OMG',
   code: 'OMG',
   decimals: 18,
   price24hHigh: 0,
   price24hLow: 0,
   price: 0.05595976535725013,
   price24h: 0.044364364108873615,
   totalSupply: '140245398245132780789239631',
   volume24h: '119202620641242380323' } }
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

### rate

This function returns a the current price of the specified currency.

**Parameters**

-   `fromCurrencyCode`  
-   `toCurrencyCode`  
-   `callback` **callback** Callback function.
-   `currencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Input desired currency.
-   `fromCurrencyId` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The price of first currency is displayed in this currency.

**Examples**

```javascript
bancor.rate("ETH", "USD", function(data, response) {
     console.log(data);
  })
 {"data":{"USD":1033.87}}
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

### tokens

This function returns a list of tokens on Bancor.

**Parameters**

-   `limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Maximum number of tokens to list.
-   `skip` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Skip this number of tokens.
-   `fromCurrencyCode` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Currency to display prices in.
-   `includeTotal` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include total.
-   `includePrice24H` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include 24 hour price.
-   `includePrice` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include price.
-   `includePriceHistory` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include price history.
-   `callback` **callback** Callback function.

**Examples**

```javascript
bancor.tokens(0, 0, "OMG", true,true,true,true, function(data, response) {
console.log(data);
})
data: 
{ currencies: { page: [Object] },
price: 
{ '5a1327c9c92a1700011c7baf': 0.030692632427397986,
'5a03590f08849f0001097d29': 0.13846103543655108,
'5a3cb6868fb75500011ab51d': 0.23149159025255506,
'5a174c5145a97200011ad30a': 0.021382577804332024,
'5a1d8d7b634e00000187855b': 0.000043367446001951,
'59d27d45acb3c12634d19efb': 0.06530552814813005,
'5a048e3078658d0001ffdab8': 0.07528024881828617,
'59d745ff90509add31e9db14': 17.961486298296112,
'5a1af60e9f604e00011f09eb': 0.015107538325629414,
'5a2cfacad0129700019a7270': 0.00890152494283532,
'594bb7e468a95e00203b048d': 0.3726407497709882,
'5a086f93875e890001605abc': 1,
'5a3800604b02a6ad9f85324f': 0.007558379155117594,
'5a37e92fed8a500001de70da': 0.03601647227852549 },
price24h: 
{ '5a086f93875e890001605abc': 1,
'594bb7e468a95e00203b048d': 0.37856454757867614,
'59d27d45acb3c12634d19efb': 0.059521291958231165,
'5a3cb6868fb75500011ab51d': 0,
'5a174c5145a97200011ad30a': 0.022126351058902722,
'5a048e3078658d0001ffdab8': 0.06775040652793572,
'5a1d8d7b634e00000187855b': 0.00005011696895057975,
'5a37e92fed8a500001de70da': 0.03556953896192395,
'5a3800604b02a6ad9f85324f': 0.009187771984328866,
'5a03590f08849f0001097d29': 0.1434845498812609,
'5a1af60e9f604e00011f09eb': 0.016895927407386328,
'5a2cfacad0129700019a7270': 0.00920144823242839,
'59d745ff90509add31e9db14': 22.540613848221113,
'5a1327c9c92a1700011c7baf': 0.02289891182252949 },
priceHistory7d: {} } }
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

### relays

This function returns a list of relays on Bancor.

**Parameters**

-   `limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Maximum number of tokens to list.
-   `skip` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Skip this number of tokens.
-   `fromCurrencyCode` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Currency to display prices in.
-   `includeTotal` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include total.
-   `includePrice24H` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include 24 hour price.
-   `includePrice` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include price.
-   `includePriceHistory` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Include price history.
-   `callback` **callback** Callback function.

**Examples**

```javascript
bancor.relays(0, 0, "OMG", true,true,true,true, function(data, response) {
console.log(data);
})
data: 
{ currencies: { page: [Object] },
price: 
{ '594bb7e468a95e00203b048d': 0.3726407497709882,
'5a1af60e9f604e00011f09eb': 0.015107538325629414,
'5a174c5145a97200011ad30a': 0.021382577804332024,
'59d745ff90509add31e9db14': 17.961486298296112,
'5a3800604b02a6ad9f85324f': 0.007558379155117594,
'5a3cb6868fb75500011ab51d': 0.23149159025255506,
'5a086f93875e890001605abc': 1,
'5a1d8d7b634e00000187855b': 0.000043367446001951,
'5a048e3078658d0001ffdab8': 0.07528024881828617,
'5a37e92fed8a500001de70da': 0.03601647227852549,
'5a03590f08849f0001097d29': 0.13846103543655108,
'59d27d45acb3c12634d19efb': 0.06530552814813005,
'5a1327c9c92a1700011c7baf': 0.030692632427397986,
'5a2cfacad0129700019a7270': 0.00890152494283532 },
price24h: 
{ '5a086f93875e890001605abc': 1,
'594bb7e468a95e00203b048d': 0.37856454757867614,
'59d27d45acb3c12634d19efb': 0.059521291958231165,
'5a3cb6868fb75500011ab51d': 0,
'5a2cfacad0129700019a7270': 0.00920144823242839,
'5a03590f08849f0001097d29': 0.1434845498812609,
'59d745ff90509add31e9db14': 22.540613848221113,
'5a37e92fed8a500001de70da': 0.03556953896192395,
'5a1327c9c92a1700011c7baf': 0.02289891182252949,
'5a048e3078658d0001ffdab8': 0.06775040652793572,
'5a174c5145a97200011ad30a': 0.022126351058902722,
'5a1d8d7b634e00000187855b': 0.00005011696895057975,
'5a1af60e9f604e00011f09eb': 0.016895927407386328,
'5a3800604b02a6ad9f85324f': 0.009187771984328866 },
priceHistory7d: {} } }
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

### currencies

This function can be used to search for a token or list all tokens.

**Parameters**

-   `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Search string, leave blank for list tokens.
-   `limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Maximum number of tokens to list.
-   `skip` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Skip this number of tokens.
-   `callback` **callback** Callback function.

**Examples**

```javascript
bancor.currencies("", 20,0, function(data, response) {
console.log(data);
})
 { data: 
{ currencies: 
{ includeTotal: false,
skip: 0,
limit: 20,
total: null,
page: [Object] } } }
```

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** JSON object.

## Future Work

* Offline Symbol lookup table
* Add further APIs (community/bounty)
* Payment APIs


## Tip Jar

* ETH - 0xA1975D105949cC3d3b4637aC893A4Fe1b06aABAa