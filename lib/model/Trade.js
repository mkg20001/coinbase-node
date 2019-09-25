"use strict";
var BaseModel = require('./BaseModel');

//##CONSTRUCTOR
//
// _args `client` and `data` are required_
//
//```
// var Trade = require('coinbase').model.Trade;
// var myMethod = new Trade(client, data);
//```
// _normally you will get users from `Trade` methods on the `Client`._
// - - -
function Trade(client, data) {
  if (!(this instanceof Trade)) {
    return new Trade(client, data);
  }
  BaseModel.call(this, client, data);
}

Trade.prototype = Object.create(BaseModel.prototype);

module.exports = Trade;

