"use strict";

//name, 
var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var UserSchema = new Schema({
  name: {
    type: 'String',
    maxlength: 30
  }
});