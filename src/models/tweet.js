const mongoose = require('mongoose');
const { Schema } = mongoose;

const Tweet = new Schema({
    usuario: { type: String, required: true },
    tweet: { type: String, required: true }
});

module.exports = mongoose.model('Tweet', Tweet);