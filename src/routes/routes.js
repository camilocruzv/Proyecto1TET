const express = require('express');
const router = express.Router();

const Tweet = require('../models/tweet');

router.get('/signup', (req, res, next) => {

});

router.post('/signup', (req, res, next) => {

});

router.get('/signin', (req, res, next) => {

});

router.post('/signin', (req, res, next) => {

});

router.get('/', async (req, res) =>{
    const tweets = await Tweet.find();
    res.json(tweets);
});

router.get('/:id', async (req, res) => {
    const tweet = await Tweet.findById(req.params.id);
    res.json(tweet);
});

router.post('/', async (req, res) =>{
    const { usuario, tweet } = req.body;
    const tweett = new Tweet({usuario, tweet});
    await tweett.save();
    res.json({status: 'Tweet saved'});
});

router.put('/:id', async (req, res) => {
    const { usuario, tweet } = req.body;
    const newTweet = { usuario, tweet };
    await Tweet.findByIdAndUpdate(req.params.id, newTweet);
    res.json({status: 'Tweet updated'});    
});

router.delete('/:id', async (req, res) => {
    await Tweet.findByIdAndRemove(req.params.id);
    res.json({status: 'Tweet deleted'});
});

module.exports = router;