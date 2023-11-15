"use strict";

var mongoose = new require('mongoose');
mongoose.connect('mongodb+srv://testdb:testdb12345@testdb.nuqjg.mongodb.net/mySecendDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error', function (error) {
  console.log(error);
});
db.on('open', function () {
  console.log('Connected to MongoDB s');
});
var UsersSchema = new mongoose.Schema({
  productId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products'
  }],
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: Number
  }
});
var ProductsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  createdAt: {
    type: Number,
    "default": Date.now
  }
});
module.exports = UsersSchema;
module.exports = ProductsSchema;