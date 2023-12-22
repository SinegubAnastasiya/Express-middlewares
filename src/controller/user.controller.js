const express = require('express')
const router = express.Router()
const { getAllData, getDataById, createUser, updateUser, deleteUser, updateBody } = require('../service/user.service')

router.get('/', (req, res) => {
    try {
        const data = getAllData()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = getDataById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.post('/', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const addedData = createUser(name, surname, email, pwd)
        res.status(200).send(addedData)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const updatedData = updateUser(id, name, surname, email, pwd)
        res.status(200).send(updatedData)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const result = deleteUser(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const result = updateBody(id, body)
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router