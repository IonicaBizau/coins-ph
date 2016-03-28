# coins-ph [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/coins-ph.svg)](https://www.npmjs.com/package/coins-ph) [![Downloads](https://img.shields.io/npm/dt/coins-ph.svg)](https://www.npmjs.com/package/coins-ph) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Coins.ph API wrapper for Node.js

The [Coins.ph API Reference](https://coins.readme.io/v2.1/docs) is a good resource to learn more about these APIs.

## :cloud: Installation

```sh
$ npm i --save coins-ph
```

## :clipboard: Example

```js
const Coins = require("coins-ph");

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
});

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
```

## :memo: Documentation

### `createBuyorder(data, cb)`
Create a new buyorder

#### Params
- **Object** `data`: The order data as documented [here](https://coins.readme.io/docs/testinput).
- **Function** `cb`: The callback function.

### `markBuyorderPaid(data, cb)`
Mark a buy order as paid

#### Params
- **Object** `data`: The order data as documented [here](https://coins.readme.io/docs/buyorder-1).
- **Function** `cb`: The callback function.

### `buyorder(data, cb)`
Retrieve an existing buyorder

#### Params
- **Object** `data`: The order data as documented [here](https://coins.readme.io/docs/buyorder).
- **Function** `cb`: The callback function.

### `createSellorder(data, cb)`
Create a new sellorder

#### Params
- **Object** `data`: The sell order data (documented [here](https://coins.readme.io/docs/sellorder)).
- **Function** `cb`: The callback function.

### `validateField(data, cb)`
Validate field values

#### Params
- **Object** `data`: The post data (documented [here](https://coins.readme.io/docs/validate-field)).
- **Function** `cb`: The callback function.

### `sellorder(params, cb)`
Retrieve an existing sellorder

#### Params
- **Object** `params`: The sell order params (documented [here](https://coins.readme.io/docs/sellorder-1)).
- **Function** `cb`: The callback function.

### `transactionHistory(cb)`
Gets the transaction history (buyorders).

#### Params
- **Function** `cb`: The callback function.

### `payinOutlets(params, cb)`
Retrieve supported payin-outlets

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/payin-outlets)).
- **Function** `cb`: The callback function.

### `payinOutletFees(params, cb)`
Retrieve current payin-outlet-fees

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/payin-outlet-fees)).
- **Function** `cb`: The callback function.

### `payinOutletCategories(params, cb)`
Retrieve supported payin-outlet-categories

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/payin-outlet-categories)).
- **Function** `cb`: The callback function.

### `createPaymentRequest(data, cb)`
Create a new payment request

#### Params
- **Object** `data`: The request data (documented [here](https://coins.readme.io/docs/payment-requests)).
- **Function** `cb`: The callback function.

### `paymentRequests(params, cb)`
Retrieve an existing or a list of existing payment requests

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/payment-requests-1)).
- **Function** `cb`: The callback function.

### `createPaymentRequest(data, cb)`
Transfer funds between two accounts

#### Params
- **Object** `data`: The request data (documented [here](https://coins.readme.io/docs/transfers)).
- **Function** `cb`: The callback function.

### `transfers(params, cb)`
Get the list of transfers or a specific one.

#### Params
- **Object** `params`: The params object (documented [here](https://coins.readme.io/docs/transfers-1)).
- **Function** `cb`: The callback function.

### `cryptoAccounts(params, cb)`
Retrieve existing crypto-accounts

#### Params
- **Object** `params`: The params object (documented [here](https://coins.readme.io/docs/crypto-accounts)).
- **Function** `cb`: The callback function.

### `convertFunds(data, cb)`
Convert funds between a user's accounts

#### Params
- **Object** `data`: The data object (documented [here](https://coins.readme.io/docs/crypto-account://coins.readme.io/docs/crypto-exchange)).
- **Function** `cb`: The callback function.

### `cryptoExchanges(params, cb)`
Retrieve current crypto-exchanges

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/crypto-exchanges)).
- **Function** `cb`: The callback function.

### `cryptoRoutes(cb)`
Retrieve existing crypto-routes

#### Params
- **Function** `cb`: The callback function.

### `cryptoPayments(params, cb)`
Get the crypto payments or a specific one.

#### Params
- **Object** `params`: The request params (documented [here](https://coins.readme.io/docs/crypto-payments)).
- **Function** `cb`: The callback function.

### `createUser(data, cb)`
Create a new user

#### Params
- **Object** `data`: The request data (documented [here](https://coins.readme.io/docs/user)).
- **Function** `cb`: The callback function.

### `_getNonce()`
This is called internally.

#### Return
- **Number** The `nonce` value.

### `_signRequest(url, body)`
Signs a request.

#### Params
- **String** `url`: The request url.
- **Object** `body`: The request data.

#### Return
- **Object** An object containing:
 - `signature` (String): The HMAC signature.
 - `nonce` (String): The stringified nonce value.

### `_request(options, cb)`
Low level function for making requests to the API endpoints.

#### Params
- **Object** `options`: An object containing the following fields:
 - `url` (String): The api endpoint.
 - `method` (String): The request method (default: `get`).
 - `params` (Object): The params object.
 - `data` (Object): The POST data object.
 - `responseField` (String): The response field to take.
 - `version` (String): The version endpoint (default: `d/api`). It
    could be `api/v2` or `api/v3` too, depending on the endpoint.
- **Function** `cb`: The callback function.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md