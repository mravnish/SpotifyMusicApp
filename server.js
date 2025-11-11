const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Show index.html on homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login API
app.post('/login', (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
    res.json({ message: 'Login form submitted!' });
});

// Signup API
app.post('/signup', (req, res) => {
    const { signupUsername, signupEmail, signupPassword } = req.body;
    console.log(`Signup Username: ${signupUsername}, Email: ${signupEmail}, Password: ${signupPassword}`);
    res.json({ message: 'Signup form submitted!' });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});








// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');


// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder
// // app.use(express.json());

// // Routes to serve HTML files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'LogIn.html'));
//     const { loginEmail, loginPassword } = req.body;
//     //console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
//     res.json({ message: 'Login form submitted! Done' });
//     res.sendFile(path.join(__dirname, 'LogIn.html'));
// });

// // API routes for form submissions
// app.post('/login', (req, res) => {
//     const { loginEmail, loginPassword } = req.body;
//     console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
//     res.json({ message: 'Login form submitted!Thank You' });
// });

// app.post('/signup', (req, res) => {
//     const { signupUsername, signupEmail, signupPassword } = req.body;
//     console.log(`Signup Username: ${signupUsername}, Email: ${signupEmail}, Password: ${signupPassword}`);
//     res.json({ message: 'Signup form submitted!' });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



















// // console.log("Hello")
// // import express from 'express';
// // import bodyParser from 'body-parser';
// // // import mongoose from 'mongoose';
// // // import cors from 'cors';


// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(express.static('public')); // Serve static files from the 'public' folder


// // app.get('', (req, res) => {
// //     const { loginEmail, loginPassword } = req.body;
// //     // Process login data (e.g., authenticate user)
// //     console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
// //     res.json({ message: 'Login form submitted!' });
// //     console.log("I am Get Request")
// // });



// // // Routes
// // app.post('/login', (req, res) => {
// //     const { loginEmail, loginPassword } = req.body;
// //     // Process login data (e.g., authenticate user)
// //     console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
// //     res.json({ message: 'Login form submitted!' });
// // });

// // app.post('/signup', (req, res) => {
// //     const { signupUsername, signupEmail, signupPassword } = req.body;
// //     // Process signup data (e.g., create new user)
// //     console.log(`Signup Username: ${signupUsername}, Email: ${signupEmail}, Password: ${signupPassword}`);
// //     res.json({ message: 'Signup form submitted!' });
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });











