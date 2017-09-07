## Documentation

You can see below the API reference of this module.

### `Coins(options)`
Creates the instance of the `Coins` class.

#### Params

- **Object** `options`: An object containing:
 - `secret` (String): The secret key (mandatory).
 - `key` (String): The API key (mandatory)
 - `host` (String): The `coins.ph` host (default: `https://coins.ph/`).

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

### `createTransferRequest(data, cb)`
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

- **Object** `data`: The data object (documented [here](https://coins.readme.io/docs/crypto-exchanges)).
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

