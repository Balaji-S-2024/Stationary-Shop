const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const newUserCollection = require('../models/User'); 

// API starts
module.exports.register = async (req, res, next) => {
    try {
        console.log("hitting Data");
        const data = req.body.Data;
        console.log(data);

        const { name, email, password } = req.body.Data;
        if (name && email && password) {
            const user = {
                name: name,
                email: email,
                password: password,
            }

            await newUserCollection.create(user);
            res.send('user created!')
        }
    }
    catch (error) {
        console.error(error);
        next(error)
        res.status(500).send('Server error');
    }
}
