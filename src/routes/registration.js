/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const router = require('express').Router();

const signup = require('../models/registration');

router.post('/add', (req, res, next) => {

  const newsignup = new signup ({
    userame: req.body.username
  });
  newsignup.save()
    .then(() => res.json('user registered'))
    .catch((err) => res.status(400).json({error: err}))
});

module.exports = router;