"use strict";

const Coins = require("../lib");

let client = new Coins({
    key: process.env.COINS_PW_KEY
  , secret: process.env.COINS_PW_SECRET
});

client.cryptoAccounts({}, (err, data) => {
    console.log(err || data);
    // =>
    // [ { id: 'ffd371c559f24aa0a242ddd394a294c9',
    //     name: 'Default Account',
    //     currency: 'BTC',
    //     balance: '0.09000000',
    //     pending_balance: '0.00000000',
    //     total_received: '0.10168800',
    //     default_address: '34SuY....yp6m' },
    //   { id: '7874d16264f94c6fbee831c9b6c98283',
    //     name: 'Default Account',
    //     currency: 'CLP',
    //     balance: '0.00000000',
    //     pending_balance: '0.00000000',
    //     total_received: '0.00000000',
    //     default_address: 'bf...129' } ]
    client.payinOutlets({ region: "PH" }, (err, data) => {
        console.log(err || data);
        // =>
        // [ { id: '..._deposit',
        //     outlet_category: 'atm_deposit',
        //     payment_outlet_type: {...},
        //     amount_limits: [ [Object] ],
        //     denominations: [],
        //     name: '...',
        //     region: '...',
        //     verification_level_requirement: 0,
        //     help_text: '...',
        //     help_link: 'https://coinsph.zendesk.com/hc/en-us/articles/202637070',
        //     instructions: '...',
        //     payout_duration: null,
        //     is_express: false }, ... ]
    });
});
