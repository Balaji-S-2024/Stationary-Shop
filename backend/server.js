const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const jwt = require('jsonwebtoken');

const app = express()

const connection = require('./config/dB')

connection();

app.use(express.json());
app.use(cors());

// API starts
// REGISTER
const newUserCollection = require('./models/User'); 
app.post('/register', async (req, res) => {
    console.log('hitting register...');
    try {
        console.log("hitting Data");
        const data = req.body;
        console.log(data);

        const { username, email, password } = req.body;
        if (username && email && password) {
            const user = {
                name: username,
                email: email,
                password: password,
            }

            await newUserCollection.create(user);
            res.send('user created!')
        }
    }
    catch (error) {
        console.error(error);
        res.send('Server error');
    }
})


// USer

const User = require('./models/User');
app.get('/get-user', async (req, res) => {
    console.log('hitting get...');
    try {
        const users = await User.find(); 
        console.log(users);
        res.json(users); 
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

//LOGIN
const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
console.log('Generated Secret Key:', secretKey);

// login API
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ name: username, password: password });
    console.log(user);
    user.isLoggedIn = true;
    user.save()
    console.log(user);

    // user.isLoggedIn = true;
  });





app.get('/', async (req, res) => {
    console.log('hitting get...');
    res.send('get')
})

app.listen(3000, () => {
    console.log('Backend Server Running...');
})