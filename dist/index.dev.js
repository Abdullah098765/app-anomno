"use strict";

var express = require('express');

var bodyParser = require("body-parser");

var cors = require('cors');

var app = express();

var firebase = require('firebase/app');

var firestore = require('firebase/firestore');

var addDoc = firestore.addDoc;
var collection = firestore.collection;
var getFirestore = firestore.getFirestore;
var firebaseConfig = {
  apiKey: "AIzaSyCmpqOzl80y01bEgUoJ8P5QNHjfh9-VF2Y",
  authDomain: "yaromeha-app.firebaseapp.com",
  projectId: "yaromeha-app",
  storageBucket: "yaromeha-app.appspot.com",
  messagingSenderId: "460269542777",
  appId: "1:460269542777:web:50fef46c9b05ab6711a3a8",
  measurementId: "G-49QXQF2J91"
};
firebase.initializeApp(firebaseConfig);
var db = getFirestore(); // const collection = firestore.collection('Users');
// const User = collection('Users');

app.use(bodyParser.json({
  limit: '500055kb'
}));
app.use(cors());
var data = {};
app.use('/login', function (req, res, next) {
  next();
});
app.post('/login', function (req, res) {
  res.send(req.body);
  console.log(req.body);
  data = req.body;

  try {
    var docRef = addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
app.get('/login', function (req, res) {
  res.send(data);
  console.log(data);
});
app.listen(process.env.PORT || 3001);