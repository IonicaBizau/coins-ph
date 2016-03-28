"use strict";

const Coins = require("../lib");

let client = new Coins({
    key: process.env.COINS_PW_KEY
  , secret: process.env.COINS_PW_SECRET
});

client._request("crypto-accounts", (err, data) => {
    console.log(err || data);
});
