const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");// used for image and other files
const path = require("path");
const cors = require("cors");

const app = express()

const connection = require('./config/dB')

connection();

app.use(express.json());
app.use(cors());

// 

const newUserCollection = require('./models/User'); 

// API starts
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








// 


// const user = require("./routes/userRoute");

// app.use(cookieParser());

// app.use("/", user);

app.listen(3000, () => {
    console.log('Backend Server Running...');
})