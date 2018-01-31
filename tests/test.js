var Bancor = require("../lib/bancor.js");

var bancor = new Bancor();

bancor.ticker("AIX", "ETH", function(data, response) {
    console.log(data);
})

bancor.rate("AIX", "USD", function(data, response) {
    console.log(data);
})

bancor.tokens(0, 0, "ETH", true,true,true,true, function(data, response) {
    console.log(data);
})

bancor.relays(0, 0, "ETH", true,true,true,true, function(data, response) {
    console.log(data);
})

bancor.currencies("", 20,0, function(data, response) {
    console.log(data["data"]["currencies"]);
})

bancor.tickerBySymbol("AIX", "ETH", function(data, response) {
    console.log(data);
})
