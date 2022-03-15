const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json({limit: '5000kb'}));

var todos = [];

app.get('/', function (req, res) {
    console.log('Hello')
    res.send('Hello World')
})

// app.use(function (req, res, next) {
//     console.log('Hello');
//     console.log(req.query);
//     if(req.query.key === '123456'){
//         next();
//     }
//     else {
//         res.send("Invalid API key");
//     }
// });


app.get('/get', function (req, res) {
    res.send(todos);
});

app.post('/add', function (req, res) {
    console.log(req.body);
    todos.unshift(req.body);
    res.send('Successfully added')
})

app.listen(process.env.PORT || 3000)