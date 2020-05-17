/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const signupSchema = new Schema({
    username: { type: String, required: true }
}
);

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;