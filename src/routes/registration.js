/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const Signup = require('../models/registration');

router.post('/add', (req, res) => {
  const { username } = req.body;
  console.log(username);
  const newsignup = new Signup({
    username
  });
  newsignup.save()
    .then(() => res.json('user registered'))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
