const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

app.use(cors());

require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connect = mongoose.connection;

connect.once('open', () => {
  return 'connected';
});

app.use((req, res) => {
  res.json({ message: 'your request wass successfull' });
});

module.exports = app;
