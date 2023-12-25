const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    res.status(200).send('ok')
})

module.exports = route