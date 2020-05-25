/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-escape */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Signup = require('../models/registration');

router.post('/add', (req, res) => {

  const errorArray = [];

  const userRegex = /^[a-z]+[0-9]*/gi;

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    errorArray.push('please fill all fields');
  }

  if (username.length < 3) {
    errorArray.push('username should be 3 0r more characters');
  }

  if (!userRegex.test(username)) {

    errorArray.push('username does not fit the required specification');
  }

  // check if username already exists
  Signup.findOne({ username }).then(
    (user) => {
      if (user) {

        errorArray.push('username already exist');
      }
    }
  ).catch((err) => res.status(400).json(`Error : ${err}`));


  // check if email already exists
  Signup.findOne({ email }).then(
    (emailCheck) => {
      if (emailCheck) {

        errorArray.push('email already exists');

      }

      if (!emailRegex.test(email)) {
        errorArray.push('please input the correct email');
      }

      if (errorArray.length > 0) {
        return res.status(400).json({ errorArray });
      }

      // hash the password and save to database
      bcrypt.hash(password, 10).then(
        (hash) => {
          const newSignup = new Signup({
            username,
            email,
            password: hash
          });

          newSignup.save()
            .then(() => res.json('user registered'))
            .catch((err) => res.status(400).json(`Error: ${err}`));

        }
      ).catch((err) => res.status(400).json(`Error: ${err}`));


    }

  ).catch((err) => res.status(400).json(`Error: ${err}`));


});


// login Router
router.post('/login', (req, res) => {

  const { email, password } = req.body;

  Signup.findOne({ email }).then(
    (user) => {

      if (!user) {
        return res.status(401).json({ message: 'invalid credentials' });
      } 

      bcrypt.compare(password, user.password).then(
        (valid) => {

          if (!valid) {

            return res.status(401).json({ message: 'invalid credentials' });
          }

          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN-SECRET_NUMBER',
            { expiresIn: '24h' }
          );

          res.status(201).json({
            username: user.username,
            token,
            message: 'user logged in'
          });
        }
      ).catch((err) => res.status(400).json(`Error: ${err}`));
    }
  ).catch((err) => res.status(400).json(`Error: ${err}`));


});

module.exports = router;
