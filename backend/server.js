const express = require('express')
const mongoose = require('mongoose')

const app = express()

const connection = require('./config/dB')

connection();

app.listen(3000, () => {
    console.log('Backend Server Running...');
})