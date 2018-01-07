var Client = require('node-rest-client').Client;

var client = new Client();

const markets = {
    'OMG': '5a086f93875e890001605abc',
    'ENJ': '5a174c5145a97200011ad30a',
    'BNT': '594bb7e468a95e00203b048d',
    'IND': '5a1af60e9f604e00011f09eb',
    'STX': '59d27d45acb3c12634d19efb',
    'GNO': '59d745ff90509add31e9db14'
}

class Bancor {


    /**
     * This function returns a ticker showing price (low, high, current), supply, and volume of specified currency.
     * @param {String} currencyId Input desired currency.
     * @param {String} fromCurrencyId The price of first currency is displayed in this currency.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     *  bancor.ticker("OMG", "GNO", function(data, response) {
     *      console.log(data);
     *   })
     *  { name: 'OmiseGo',
     *    symbol: 'OMG',
     *    code: 'OMG',
     *    decimals: 18,
     *    price24hHigh: 0,
     *    price24hLow: 0,
     *    price: 0.05595976535725013,
     *    price24h: 0.044364364108873615,
     *    totalSupply: '140245398245132780789239631',
     *    volume24h: '119202620641242380323' } }
     */

    // tickerBySymbol(currencyId, fromCurrencyId, callback) {
    //     let parameters = {
    //         path: {
    //             "currencyId": markets[currencyId],
    //             "fromCurrencyId": markets[fromCurrencyId]
    //         },
    //     };
    //     return client.get("https://api.bancor.network/0.1/currencies/${currencyId}/ticker?fromCurrencyId=${fromCurrencyId}", parameters, callback);
    // }

    /**
     * This function returns a ticker showing price (low, high, current), supply, and volume of specified currency.
     * @param {String} currencyId Input desired currency id.
     * @param {String} fromCurrencyId The price of first currency is displayed in this currency.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     *  bancor.ticker("5a086f93875e890001605abc", "5a174c5145a97200011ad30a", function(data, response) {
     *      console.log(data);
     *   })
     *  { name: 'OmiseGo',
     *    symbol: 'OMG',
     *    code: 'OMG',
     *    decimals: 18,
     *    price24hHigh: 0,
     *    price24hLow: 0,
     *    price: 0.05595976535725013,
     *    price24h: 0.044364364108873615,
     *    totalSupply: '140245398245132780789239631',
     *    volume24h: '119202620641242380323' } }
     */

    ticker(currencyId, fromCurrencyId, callback) {
        let parameters = {
            path: {
                "currencyId": currencyId,
                "fromCurrencyId": fromCurrencyId
            },
        };
        return client.get("https://api.bancor.network/0.1/currencies/${currencyId}/ticker?fromCurrencyId=${fromCurrencyId}", parameters, callback);
    }

    /**
     * This function returns a the current price of the specified currency.
     * @param {String} currencyId Input desired currency.
     * @param {String} fromCurrencyId The price of first currency is displayed in this currency.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     *  bancor.rate("ETH", "USD", function(data, response) {
     *      console.log(data);
     *   })
     *  {"data":{"USD":1033.87}}
     */

    rate(fromCurrencyCode, toCurrencyCode, callback) {
        let parameters = {
            path: {
                "fromCurrencyCode": fromCurrencyCode,
                "toCurrencyCode": toCurrencyCode
            },
        };
        return client.get("https://api.bancor.network/0.1/currencies/rate?fromCurrencyCode=${fromCurrencyCode}&toCurrencyCodes=${toCurrencyCode}", parameters, callback);
    }

    /**
     * This function returns a list of tokens on Bancor.
     * @param {number} limit Maximum number of tokens to list.
     * @param {number} skip Skip this number of tokens.
     * @param {String} fromCurrencyCode Currency to display prices in.
     * @param {boolean} includeTotal Include total.
     * @param {boolean} includePrice24H Include 24 hour price.
     * @param {boolean} includePrice Include price.
     * @param {boolean} includePriceHistory Include price history.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     * bancor.tokens(0, 0, "OMG", true,true,true,true, function(data, response) {
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
     */

    tokens(limit, skip, fromCurrencyCode, includeTotal, includePrice24H, includePrice, includePriceHistory, callback) {
        let parameters = {
            path: {
                "limit": limit,
                "skip": skip,
                "fromCurrencyCode": fromCurrencyCode,
                "includeTotal": includeTotal,
                "includePrice24H": includePrice24H,
                "includePrice": includePrice,
                "includePriceHistory": includePriceHistory
            },
        };
        return client.get("https://api.bancor.network/0.1/currencies/tokens?limit=${limit}&skip=${skip}&fromCurrencyCode=${fromCurrencyCode}&includeTotal=" +
            "${includeTotal}&includePrice24H=${includePrice24H}&includePrice=${includePrice}&includePriceHistory=${includePriceHistory}", parameters, callback);
    }

    /**
     * This function returns a list of relays on Bancor.
     * @param {number} limit Maximum number of tokens to list.
     * @param {number} skip Skip this number of tokens.
     * @param {String} fromCurrencyCode Currency to display prices in.
     * @param {boolean} includeTotal Include total.
     * @param {boolean} includePrice24H Include 24 hour price.
     * @param {boolean} includePrice Include price.
     * @param {boolean} includePriceHistory Include price history.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     * bancor.relays(0, 0, "OMG", true,true,true,true, function(data, response) {
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

     */

    relays(limit, skip, fromCurrencyCode, includeTotal, includePrice24H, includePrice, includePriceHistory, callback) {
        let parameters = {
            path: {
                "limit": limit,
                "skip": skip,
                "fromCurrencyCode": fromCurrencyCode,
                "includeTotal": includeTotal,
                "includePrice24H": includePrice24H,
                "includePrice": includePrice,
                "includePriceHistory": includePriceHistory
            },
        };
        return client.get("https://api.bancor.network/0.1/currencies/tokens?limit=${limit}&skip=${skip}&fromCurrencyCode=${fromCurrencyCode}&includeTotal=" +
            "${includeTotal}&includePrice24H=${includePrice24H}&includePrice=${includePrice}&includePriceHistory=${includePriceHistory}", parameters, callback);
    }

    /**
     * This function can be used to search for a token or list all tokens.
     * @param {String} name Search string, leave blank for list tokens.
     * @param {number} limit Maximum number of tokens to list.
     * @param {number} skip Skip this number of tokens.
     * @param {callback} callback Callback function.
     * @returns {object} JSON object.
     * @example 
     *  bancor.currencies("", 20,0, function(data, response) {
         console.log(data);
        })
     *  { data: 
        { currencies: 
          { includeTotal: false,
            skip: 0,
            limit: 20,
            total: null,
            page: [Object] } } }

     */

    currencies(name, limit, skip, callback) {
        let parameters = {
            path: {
                "name": name,
                "limit": limit,
                "skip": skip,
            },
        };
        return client.get("https://api.bancor.network/0.1/currencies?type=ethereum&name=${name}&skip=${skip}&limit=${limit}&excludeSubTypes=bounty", parameters, callback);
    }
}

module.exports = Bancor;