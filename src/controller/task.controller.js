const express = require('express')
const route = express.Router()
const object = require('../service/task.service')
const { isValidTaskId, isValidTask } = require('../helper/task-validation')

route.get('/', (req,res) => {
    try {
        
        res.status(200).send(object.getAllTasks())
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', isValidTaskId, (req,res) => {
    try {
        const { id } = req.params
        res.status(200).send(object.getTaskById(id))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', isValidTaskId, isValidTask, (req,res) => {
    try {
        const { id } = req.params
        const { title, date, hours, teacher } = req.body
        res.status(200).send(object.updateTasks(id, title, date, hours, teacher))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', isValidTask, (req,res) => {
    try {
        const { title, date, hours, teacher } = req.body
        res.status(200).send(object.createNewTask(title, date, hours, teacher))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', isValidTaskId, (req,res) => {
    try {
        const { id } = req.params
        res.status(200).send(object.deleteTaskById(id))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.patch('/:id',isValidTaskId, (req,res) => {
    try {
        const { id } = req.params
        const body = req.body
        res.status(200).send(object.updateSomePart(id, body))
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route