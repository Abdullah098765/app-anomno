const express = require('express');
const app = express();

app.get('/',(res,req)=>{
    console.log('asdf')
res.send('asd')
})