const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql')
import config from './Config/db'
import listRouter from './Controllers/lists'
import createConnection from './DB/index'

const app = express()
const port = 8000
createConnection()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/lists', listRouter)

app.listen(port, (err) => {
    console.log('err>>>', err);
})