const express = require('express');
const router = express.Router();

const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.insert(req.body)
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(next)
})

module.exports = router;
