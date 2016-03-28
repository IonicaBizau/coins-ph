"use strict";

const request = require("request")
    , crypto = require("crypto")
    ;

module.exports = class Coins {
    constructor (options) {
        this.options = options;
	this.apiSecret = options.secret;
	this.apiKey = options.key;
        this.host = "https://coins.ph/api/v3/";
    }
    _getNonce() {
        return new Date().getTime() * 1e6;
    }
    _signRequest (url, body) {
        let nonce = this._getNonce().toString()
          , message = null
          ;


        // GET requests don't have a body, so we'll skip that for signing
	if (body === undefined) {
            message = nonce + url;
        } else {
            //body = json.dumps(body, separators=(',', ':'))
            message = nonce + url + JSON.stringify(body)
        }


        return {
            signature: crypto.createHmac("sha256", this.apiSecret).update(message).digest("hex")
          , nonce: nonce
        };
    }

    _request (url, method, data, cb) {
        // req(url, data, cb)
        if (typeof data === "function") {
            cb = data;
            data = method;
            method = "POST";
        }

        // req(url, cb)
        if (typeof method === "function") {
            cb = method;
            method = "GET";
        }

        url = this.host + url + "/";
        let signed = this._signRequest(url, data);

        request({
            url: url
          , method: method
          , headers: {
	      ACCESS_SIGNATURE: signed.signature
            , ACCESS_KEY: this.apiKey
            , ACCESS_NONCE: signed.nonce
            }
          , data: data
          , json: true
        }, (err, res) => {
            if (res.body && res.body.errors) {
                err = new Error(res.body.errors[0]);
            }
            if (err) { return cb(err, null, res); }
            cb(null, res.body);
        })
    }
}
