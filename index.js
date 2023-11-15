const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const addDoc = firestore.addDoc
const collection = firestore.collection
const getFirestore = firestore.getFirestore
const getDoc = firestore.getDoc
const doc = firestore.doc


app.use(bodyParser.json({
  limit: '500055kb'
}));
app.use(cors());
var data = {}




app.use('/login', function (req, res, next) {
  next()
});




app.post('/login', function (req, res) {

  console.log(req.body);
  data = req.body;


})





app.get('/login', function (req, res) {

  console.log(data)

})


app.post('/userdata', function (req, res) {



})

app.get('/userdata', function (req, res) {
  res.send('ui78')
})

app.listen(process.env.PORT || 3001);



var admin = require("firebase-admin");

var serviceAccount = require("./signal-hub-eb98f-firebase-adminsdk-nvfwh-48f27d1860.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

var a = 0

const sendNotificationToUser = async (fcmToken, payload) => {


  const message = {
    "token": fcmToken,
    "notification": {
      "title": payload.title + a,
      "body":payload.body,
      image:'https://firebasestorage.googleapis.com/v0/b/signal-hub-eb98f.appspot.com/o/profile-pictures%2F654546f7c96b41429b1c95f2%2Fdownload%20(2).png?alt=media&token=222bcd71-4c03-4c03-be8f-96244701ea34'
    },
    "webpush": {
      "fcm_options": {
        "link": "https://www.youtube.com/watch?v=GR5U85eo4yQ&list=RDMMcFGRRoaPk78&index=2&ab_channel=CokeStudioPakistan"
      }
    }
  }

  try {
    const response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
    console.log('FCM Message Payload:', message);

  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const fcmToken = "fgPMUarPfnZ5EQgwdQ8evy:APA91bHZgWjRuDuLU5qeC7KbnczcZ7eZHZvF1bCQ8Y5Sg5UnVut_fcP9gCA8cklJZl3f8mr768KUiYn1aHOJ9byHZgGrmoiHXUVAxAML1tVwOzrYLE4xVlF2KNsbXLlxwbU6epNIBhX8";
const notificationPayload = {
  title: 'Signal Hubs!',
  body: `Signal: FOR BTC?USDTAAA}`,  // Corrected the syntax error in the body
};

setInterval(() => {
  a++
  sendNotificationToUser(fcmToken, notificationPayload);  // Provide the FCM token and payload as arguments

}, 5000);

